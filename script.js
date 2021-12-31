$(document).ready(function(){


  var playlist = [{
      title:"ADM FM -by nadun ",
      artist:"nadun",
      mp3:"https://node-25.zeno.fm/x6gu78qhvf9uv?rj-ttl=5&rj-tok=AAABfg69EU0A_t7Jv40VYGnbLw",
      oga:"",
      poster: "https://i.imgur.com/sCbrzQa.png"
    },{
      title:"Lion FM",
      artist:"Kurunegala, Sri Lanka",
      mp3:"https://node-28.zeno.fm/zq6tn92g8yzuv?rj-ttl=5&aw_0_req_lsid=dfbd2869cd252db93f4c6536a3eaf401&acu-uid=613961479433&bsw-uid=701085ac-4f1d-415c-b897-3240e145fff4&cto-uid=73fb5c14-0175-43de-b1b8-afa0b7cc49d2-61640c27-4c4b&adt-uid=cuid_4a627941-2c0c-11ec-b167-129d177c1666&amb-uid=3045925210743544192&rj-tok=AAABfg7uwNEAjdBdYFXBtOZaRA&aw-uid=dfbd2869cd252db93f4c6536a3eaf401&dyn-uid=04030001_61640cdb5e726&dbm-uid=CAESEJHpLHgmmGrWXZW8aWN4Deg&mm-uid=207e612d-bcdf-4600-bf64-266a886ec473&triton-uid=cookie%3A26156c30-f0ea-4a0a-9347-76b3b4dbea71&an-uid=7004144898073735794&ttd-uid=a386317d-e5ba-4677-8bce-06fb80761397",
      oga:"",
      poster: "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2FXOfITQ0s7yLulLiUrBe7oJ8NKAR01_vmIvMeOWZWdi8%2Frs%3Afit%3A250%3A250%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1FvdEhWeEFzTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ1F3cnU2dFFrTW9nRUVlbVZ1YncvaW1hZ2UvP3Jlc2l6ZT0yNTB4MjUwJnVwZGF0ZWQ9MTY0MDkxMDAxMzAwMA.webp&w=256&q=75"
    },{
      title:"Sinhala  covers",
      artist:"unkonwn",
      mp3: "https://node-11.zeno.fm/xwwnvdbx4x8uv?rj-ttl=5&aw_0_req_lsid=dfbd2869cd252db93f4c6536a3eaf401&acu-uid=613961479433&bsw-uid=701085ac-4f1d-415c-b897-3240e145fff4&cto-uid=73fb5c14-0175-43de-b1b8-afa0b7cc49d2-61640c27-4c4b&adt-uid=cuid_4a627941-2c0c-11ec-b167-129d177c1666&amb-uid=3045925210743544192&rj-tok=AAABfg73h54ALyY1by180hLfpw&aw-uid=dfbd2869cd252db93f4c6536a3eaf401&dyn-uid=04030001_61640cdb5e726&dbm-uid=CAESEJHpLHgmmGrWXZW8aWN4Deg&mm-uid=207e612d-bcdf-4600-bf64-266a886ec473&triton-uid=cookie%3A26156c30-f0ea-4a0a-9347-76b3b4dbea71&an-uid=7004144898073735794&ttd-uid=a386317d-e5ba-4677-8bce-06fb80761397",
      oga: "",
      poster: "https://i.imgur.com/klJKSVZ.jpghttps://node-11.zeno.fm/xwwnvdbx4x8uv?rj-ttl=5&aw_0_req_lsid=dfbd2869cd252db93f4c6536a3eaf401&acu-uid=613961479433&bsw-uid=701085ac-4f1d-415c-b897-3240e145fff4&cto-uid=73fb5c14-0175-43de-b1b8-afa0b7cc49d2-61640c27-4c4b&adt-uid=cuid_4a627941-2c0c-11ec-b167-129d177c1666&amb-uid=3045925210743544192&rj-tok=AAABfg73h54ALyY1by180hLfpw&aw-uid=dfbd2869cd252db93f4c6536a3eaf401&dyn-uid=04030001_61640cdb5e726&dbm-uid=CAESEJHpLHgmmGrWXZW8aWN4Deg&mm-uid=207e612d-bcdf-4600-bf64-266a886ec473&triton-uid=cookie%3A26156c30-f0ea-4a0a-9347-76b3b4dbea71&an-uid=7004144898073735794&ttd-uid=a386317d-e5ba-4677-8bce-06fb80761397https://node-11.zeno.fm/xwwnvdbx4x8uv?rj-ttl=5&aw_0_req_lsid=dfbd2869cd252db93f4c6536a3eaf401&acu-uid=613961479433&bsw-uid=701085ac-4f1d-415c-b897-3240e145fff4&cto-uid=73fb5c14-0175-43de-b1b8-afa0b7cc49d2-61640c27-4c4b&adt-uid=cuid_4a627941-2c0c-11ec-b167-129d177c1666&amb-uid=3045925210743544192&rj-tok=AAABfg73h54ALyY1by180hLfpw&aw-uid=dfbd2869cd252db93f4c6536a3eaf401&dyn-uid=04030001_61640cdb5e726&dbm-uid=CAESEJHpLHgmmGrWXZW8aWN4Deg&mm-uid=207e612d-bcdf-4600-bf64-266a886ec473&triton-uid=cookie%3A26156c30-f0ea-4a0a-9347-76b3b4dbea71&an-uid=7004144898073735794&ttd-uid=a386317d-e5ba-4677-8bce-06fb80761397https://node-11.zeno.fm/xwwnvdbx4x8uv?rj-ttl=5&aw_0_req_lsid=dfbd2869cd252db93f4c6536a3eaf401&acu-uid=613961479433&bsw-uid=701085ac-4f1d-415c-b897-3240e145fff4&cto-uid=73fb5c14-0175-43de-b1b8-afa0b7cc49d2-61640c27-4c4b&adt-uid=cuid_4a627941-2c0c-11ec-b167-129d177c1666&amb-uid=3045925210743544192&rj-tok=AAABfg73h54ALyY1by180hLfpw&aw-uid=dfbd2869cd252db93f4c6536a3eaf401&dyn-uid=04030001_61640cdb5e726&dbm-uid=CAESEJHpLHgmmGrWXZW8aWN4Deg&mm-uid=207e612d-bcdf-4600-bf64-266a886ec473&triton-uid=cookie%3A26156c30-f0ea-4a0a-9347-76b3b4dbea71&an-uid=7004144898073735794&ttd-uid=a386317d-e5ba-4677-8bce-06fb80761397"
  }, 

  {

    title:"sha fm",
    artist:"srilanka  redio ",
    mp3:"",
    oga:"",
    poster:""

  },
  
  ];




  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3",
    volumechange: function(event) {
      $( ".volume-level" ).slider("value", event.jPlayer.options.volume);
    },
    timeupdate: function(event) {
      $( ".progress" ).slider("value", event.jPlayer.status.currentPercentAbsolute);
    }
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  var PlayerData = $(cssSelector.jPlayer).data("jPlayer");
  
  
  // Create the volume slider control
  $( ".volume-level" ).slider({
     animate: "fast",
		max: 1,
		range: "min",
		step: 0.01,
		value : $.jPlayer.prototype.options.volume,
		slide: function(event, ui) {
			$(cssSelector.jPlayer).jPlayer("option", "muted", false);
			$(cssSelector.jPlayer).jPlayer("option", "volume", ui.value);
		}
  });
  
  // Create the progress slider control
  $( ".progress" ).slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = PlayerData.status.seekPercent;
			if(sp > 1) {
				// Move the play-head to the value and factor in the seek percent.
				$(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					 $( ".progress" ).slider("value", 0);
				}, 0);
			}
		}
	});

  
});