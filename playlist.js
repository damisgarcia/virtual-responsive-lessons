'use strict'

function toSource(array){
  return array.map(function(s){ return { file: s } })
}

$(document).ready(function(e){
  $('.jwp-playlist').each(function(index, ele){
    var elementId = $(ele).attr('id')
    var playlist = toSource( $(ele).attr('data-playlist').split(',') )
    var config = {
      autostart: false,
      width: 640,
      height: 360,
      playlist:playlist
    }

    $(ele).attr('data-playlist-type') == 'audio' ? config.height = 40 : false    
    jwplayer(elementId).setup(config)
  })
})
