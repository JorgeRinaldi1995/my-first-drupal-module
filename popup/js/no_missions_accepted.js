/* 
 * @file
 * Global utilities.
 *
*/


(function ($, Drupal, once) {
  Drupal.behaviors.no_missions_accepted = {
    attach: function (context, settings) {
      $(once('body', 'body')).each(function () {
        const modal = `<div class="coh-style-creator-overlay" id="missionModal">
                          <div class="coh-style-creator-modal mission-modal">
                            <div class="modal-header"><span id="close" style="cursor: pointer;">&times;</span></div>
                            <h6>Lorem ipsum ?</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</p>
                          </div>
                        </div>`

        $('body').prepend(modal)

        const closeModal = $('.modal-header > #close, .modal-footer > #close')


        closeModal.on('click', function () {
          var modalToClose = $("#missionModal")
          modalToClose.css("display", "none")
        });
      })
    }
  };
})(jQuery, Drupal, once);
