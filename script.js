$(function() {
  var icomoonURL1 = chrome.extension.getURL('fonts/icomoon.eot?rg6skn');
  var icomoonURL2 = chrome.extension.getURL('fonts/icomoon.eot?rg6skn#iefix');
  var icomoonURL3 = chrome.extension.getURL('fonts/icomoon.ttf?rg6skn');
  var icomoonURL4 = chrome.extension.getURL('fonts/icomoon.woff?rg6skn');
  var icomoonURL5 = chrome.extension.getURL('fonts/icomoon.svg?rg6skn#icomoon');

  $('head').append('@font-face{font-family:\'icomoon\';src:url(\'' + icomoonURL1 + '\');src:url(\'' + icomoonURL2 + '\')format(\'embedded-opentype\'),url(\'' + icomoonURL3 + '\')format(\'truetype\'),url(\'' + icomoonURL4 + '\')format(\'woff\'),url(\'' + icomoonURL5 + '\')format(\'svg\');font-weight:normal;font-style: normal;}[class^="icon-"],[class*="icon-"]{font-family:\'icomoon\'!important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.icon-share:before{content:"\\e901";}');

$('body').on('click', function() {
  var len;
  len = $('a').length;
  for (var i = 0; i < len; i++) {
    if ($('a').eq(i).attr('target') == '_blank') {
      $('a').eq(i).append('<span class="icon-share"></span>');
      // $('head').append('<style>#ayoint-tabico:after { content: "\\e901"; } </style>');
    }
  }
});
});
