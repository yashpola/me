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

export function addColorProps(
  element: HTMLElement | null,
  colorProps: { backgroundColor: string; color: string }
) {
  if (element) {
    element.style.backgroundColor = colorProps?.backgroundColor;
    element.style.color = colorProps?.color;
  }
}

export function removeColorProps(
  element: HTMLElement | null,
  defaultColorProps: { backgroundColor: string; color: string }
) {
  if (element) {
    element.style.backgroundColor = defaultColorProps?.backgroundColor;
    element.style.color = defaultColorProps?.color;
  }
}

export function removeColorPropsMulti(
  elementIDs: string[],
  defaultColorProps: { backgroundColor: string; color: string }
) {
  console.log(elementIDs)
  elementIDs
    .map((elementID) => {
      return document.getElementById(elementID);
    })
    .map((element) => removeColorProps(element, defaultColorProps));
}
