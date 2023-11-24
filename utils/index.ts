export function separateAtWhitespace(name: string) {
  if (name !== undefined) {
    const spaceIndex = name.indexOf(" ");

    let firstName: string;
    let lastName: string;
    // Check if a whitespace was found
    if (spaceIndex !== -1) {
      // Split the string into two parts using substring
      firstName = name.substring(0, spaceIndex);
      lastName = name.substring(spaceIndex + 1);

      // Alternatively, you can return the result
    } else {
      // If no whitespace found, handle accordingly
      console.log("No whitespace found in the input string.");
      firstName = name;
      lastName = "";
    }
    return { firstName, lastName };
  }
  return { firstName: "" };
}
