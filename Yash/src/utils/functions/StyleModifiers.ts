export function addTextDecoration(
  element: HTMLElement | null,
  textProperty: string
) {
  if (element) {
    element.style.textDecoration = textProperty;
  }
}

export function removeTextDecoration(element: HTMLElement | null) {
  if (element) {
    element.style.textDecoration = "none";
  }
}

export function removeTextDecorationMulti(elementIDs: string[]) {
  elementIDs
    .map((elementID) => {
      return document.getElementById(elementID);
    })
    .map(removeTextDecoration);
}

export function removeTextDecorationMultiExcept(
  elementIDs: string[],
  exception: HTMLElement | null
) {
  elementIDs
    .map((elementID) => {
      return document.getElementById(elementID);
    })
    .filter((element) => {
      element?.id === exception?.id;
    })
    .map(removeTextDecoration);
}

export function toggleUnderlineOnHover(
  element: HTMLElement | null,
  bit: number
) {
  bit == 0
    ? removeTextDecoration(element)
    : addTextDecoration(element, "underline");
}
