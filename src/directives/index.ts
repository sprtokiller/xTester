export const clickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = function (event: Event) {
      // Check that click is outside of the el and its children
      if (!(el == event.target || el.contains(event.target))) {
        event.stopPropagation();
        binding.value();
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el: any) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  }
};

export const focus = {
  mounted(el: any) {
    // get the first input element
    const input = el.querySelector("input");
    // focus the input
    input.focus()
    //trigger other element'ts clickOutsideEvents
    input.click();
  }
};