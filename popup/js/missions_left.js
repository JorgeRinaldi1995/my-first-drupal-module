/* 
 * @file
 * Global utilities.
 *
*/


(function ($, Drupal, once) {
  Drupal.behaviors.missions_left = {
    attach: function (context, drupalSettings) {
      $(once('body', 'body')).each(function () {

        const modal = `<div class="coh-style-creator-overlay" id="missionModal">
                        <div class="coh-style-creator-modal mission-modal">
                          <div class="modal-header"><span id="close" style="cursor: pointer;">&times;</span></div>
                          <h6>Lorem ipsum dolor sit amet ?</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</p>
                        </div>
                      </div>`

        $('body').prepend(modal)

        let missions = drupalSettings.unilever_utils.missions

        $.each(missions, function (index, value) {

          let missionsData = `<a id=${index} href=${JSON.stringify(value.alias)}><p>${JSON.stringify(value.name)}?<p></a>`

          $('.modal-data').append(missionsData)

        });

        function setCookie(cname, cvalue, exdays) {
          const date = new Date();
          date.setTime(date.getTime() + (exdays*24*60*60*1000));
          let expires = "expires="+ date.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
          
        }

        function getCookie(cname){
          let name = cname + "=";
          let decodedCookie = decodeURIComponent(document.cookie);
          let cookiesArray = decodedCookie.split(';');
          for(let i = 0; i < cookiesArray.length; i++) {
            let cookie = $.trim(cookiesArray[i]);
            if (cookie.indexOf(name) == 0) {
              let cookieToCompare = cookie.substring(name.length, cookie.length);
              return cookieToCompare;
            }
          }
          return "";
        }

        function checkCookie() {
          let showModalCookie = getCookie('modalShown');
  
          if (showModalCookie && showModalCookie === 'true') {

            $('#missionModal').hide();
            
          } else {
    
            $('#missionModal').show();

          }
        }
  
        checkCookie();

        const closeModalAndSetCookie = $('.modal-header > #close, .modal-footer > #close')

        console.log(closeModalAndSetCookie)

        closeModalAndSetCookie.on('click', function () {
          var modalToClose = $("#missionModal")
          modalToClose.css("display", "none")
          setCookie("modalShown", "true", 1)
        });
       
      })
    }
  };
})(jQuery, Drupal, once);
