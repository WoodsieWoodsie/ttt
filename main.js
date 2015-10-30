(function app() {
  'use strict';

  let documentReady = () => {
    let lastMark;

    $(".box").on("click.mark", (event) => {
      console.log(lastMark);
      let $e = $(event.target);

      if ($e.data("clicked")) {
        return;
      }

      lastMark = (lastMark === "x") ? "o" : "x";

      $e.text(lastMark);

      // $e.off("click.mark");

      $e.data("clicked", true);

    });
  }

  $(documentReady);

})();