$(".neo-video-player").each(function() {
  // Video
  var $video_container = $(this);
  var $video = $(this).find("#video-element");

  // set download link
  $('#download-video').attr('href', $('#video-element source').attr('src'));
  
  // Video Controls
  var $video_controls = $(this).find(".video-control-part");
  var $progress_bar = $(this).find(".bar-progress");
  var $progress = $(this).find(".bar-time");
  
  var $buffer_bar = $(this).find(".bar-buffer");
  var $play_button = $(this).find(".play-btn");
  var $sound_button = $(this).find(".sound-btn");

  var $volume_wrapper = $(this).find(".volume");
  var $volume_bar = $(this).find(".bar-volume");

  var $full_screen_btn = $(this).find(".fullscreen-btn");
  var $current = $(this).find(".current");
  var $duration = $(this).find(".duration");
  var $fast_fwd = $(this).find(".fastFwd");

  // Toggles play/pause for the video
  function playVideo() {
    if ($video[0].paused) {
      $video[0].play();
      $video_controls.addClass("playing");
      $play_button.addClass("pause");

      if ($video_container.parents(".video-header").length) {
        $video_container.parents(".video-header").addClass("playing");
      }
    } else {
      $video[0].pause();
      $video_controls.removeClass("playing");
      $play_button.removeClass("pause");
      $video_container.parents(".video-header").removeClass("playing");
    }
  }

  function updateVolume(x, vol) {
    if (vol) {
      $percentage = vol * 100;
    } else {
      $position = x - $volume_wrapper.offset().left;
      $percentage = 100 * $position / $volume_wrapper.width();
    }

    if ($percentage > 100) {
      $percentage = 100;
    }
    if ($percentage < 0) {
      $percentage = 0;
    }

    //update volume bar and video volume
    $volume_bar.css("width", $percentage + "%");
    $video[0].volume = $percentage / 100;

    if ($video[0].volume == 0) {
      $sound_button.addClass("mute");
    } else if ($video[0].volume > 0.5) {
      $sound_button.removeClass("mute").removeClass("low");
    } else {
      $sound_button.removeClass("mute").addClass("low");
    }
  }

  function changeSpeed() {
    if ($video[0].playbackRate === 1) {
      $video[0].playbackRate = 1.25;
      $fast_fwd.val("Speed : 1.25x");
    } else if ($video[0].playbackRate === 1.25) {
      $video[0].playbackRate = 1.5;
      $fast_fwd.val("Speed : 1.5x");
    } else if ($video[0].playbackRate === 1.5) {
      $video[0].playbackRate = 1.75;
      $fast_fwd.val("Speed : 1.75x");
    } else if ($video[0].playbackRate === 1.75) {
      $video[0].playbackRate = 2;
      $fast_fwd.val("Speed : 2x");
    } else if ($video[0].playbackRate === 2) {
      $video[0].playbackRate = 1;
      $fast_fwd.val("Speed : 1x");
    }
  }

  function launchFullscreen() {
    if ($video[0].requestFullscreen) {
      $video[0].requestFullscreen();
    } else if ($video[0].mozRequestFullScreen) {
      $video[0].mozRequestFullScreen();
    } else if ($video[0].webkitRequestFullscreen) {
      $video[0].webkitRequestFullscreen();
    } else if ($video[0].msRequestFullscreen) {
      $video[0].msRequestFullscreen();
    }
  }

  function time_format(seconds) {
    var m = Math.floor(seconds / 60) < 10
      ? "0" + Math.floor(seconds / 60)
      : Math.floor(seconds / 60);
    var s = Math.floor(seconds - m * 60) < 10
      ? "0" + Math.floor(seconds - m * 60)
      : Math.floor(seconds - m * 60);
    return m + ":" + s;
  }

  function startBuffer() {
    $current_buffer = $video[0].buffered.end(0);
    $max_duration = $video[0].duration;
    $perc = 100 * $current_buffer / $max_duration;
    $buffer_bar.css("width", $perc + "%");

    if ($current_buffer < $max_duration) {
      setTimeout(startBuffer, 500);
    }
  }

  function updatebar(x) {
    $position = x - $progress.offset().left;
    $percentage = 100 * $position / $progress_bar.width();
    if ($percentage > 100) {
      $percentage = 100;
    }
    if ($percentage < 0) {
      $percentage = 0;
    }
    $progress.css("width", $percentage + "%");
    $video[0].currentTime = $video[0].duration * $percentage / 100;
  }

  $video.on("loadedmetadata", function() {
    $current.text(time_format(0));
    $duration.text(time_format($video[0].duration));
    updateVolume(0, 0.7);
    setTimeout(startBuffer, 150);
  });

  // Play/pause on video click
  $video.click(function() {
    playVideo();
  });

  // Video duration timer
  $video.on("timeupdate", function() {
    $current.text(time_format($video[0].currentTime));
    $duration.text(time_format($video[0].duration));
    var currentPos = $video[0].currentTime;
    var maxduration = $video[0].duration;
    var perc = 100 * $video[0].currentTime / $video[0].duration;
    $progress.css("width", perc + "%");
  });

  /* VIDEO CONTROLS
		------------------------------------------------------- */

  // Hide button controls when video is playing
  $video_container.on("mouseleave", function() {
    if ($video[0].paused === false) {
      $video_container.addClass("playing");
    }
  });

  // Show button controls on hover
  $video_container.on("mouseover", function() {});

  // Play/pause on button click
  $play_button.click(function() {
    playVideo();
  });

  // Fast Forward Button
  $fast_fwd.click(function() {
    changeSpeed();
  });

  // Volume Drag
  var volumeDrag = false;
  $volume_wrapper.on("mousedown", function(e) {
    volumeDrag = true;
    $video[0].muted = false;
    $sound_button.removeClass("mute");
    updateVolume(e.pageX);
  });

  $(document).on("mouseup", function(e) {
    if (volumeDrag) {
      volumeDrag = false;
      updateVolume(e.pageX);
    }
  });

  $(document).on("mousemove", function(e) {
    if (volumeDrag) {
      updateVolume(e.pageX);
    }
  });

  // Mute video on button click
  $sound_button.click(function() {
    $video[0].muted = !$video[0].muted;
    $(this).toggleClass("mute");
    if ($video[0].muted) {
      $volume_bar.css("width", 0);
    } else {
      $volume_bar.css("width", $video[0].volume * 100 + "%");
    }
  });

  // Full Screen Button
  $full_screen_btn.click(function() {
    launchFullscreen();
  });

  // VIDEO PROGRESS BAR
  //when video timebar clicked
  var timeDrag = false; /* check for drag event */
  $progress_bar.on("mousedown", function(e) {
    timeDrag = true;
    updatebar(e.pageX);
  });
  $(document).on("mouseup", function(e) {
    if (timeDrag) {
      timeDrag = false;
      updatebar(e.pageX);
    }
  });
  $(document).on("mousemove", function(e) {
    if (timeDrag) {
      updatebar(e.pageX);
    }
  });
});