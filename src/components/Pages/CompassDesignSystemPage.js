import React from "react";
import BlurImage from "../BlurImage/BlurImage";
import Img1 from "../../Images/project-img-01.png";

const placeHolder =
  "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80";

const placeHolderBase64 =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCYRXhpZgAASUkqAAgAAAAFABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAADEBAgALAAAAWgAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAAUGhvdG9TY2FwZQAAAwABoAMAAQAAAAEAAAACoAQAAQAAABkAAAADoAQAAQAAABEAAAAAAAAA/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEQAZAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/nb+GX7ffh3SorC41Hwnb/b7RJGM9trlxpscl1HJsjktHttMLW/nW5R5VujOkZaUKX8pUm+hx/wU78Y6hdnTVsINV8Pqdtn/AGVrmtw6wd6+dPYx6ptQs0UMUgku/wCxkjmG4mOzig3XH4G6V4j0rSRG9xDZIRsK/aBG8j7WY5KlTI6ZbJG4qdsasTsTG3P448O2cjXqagyXh3mKOzklvEKvjcp4lRG2gIN80YxxhQuK/U8PnUqVCzr4SlOEVpWqRVm1o5RcoS1f2Ytc2yWx85DLsulUpxxLxlaE6kfarB0nCsqMWnP2VSpCth5SteP7yCd+Vua1i/1Z8eft++JZhqNu+gX0eLnTzDp83jbULtnt76We2SeTzNPuJBm42Rpal1mhRfPljdHjkj+f/wDhsvxF/wBAB/8AwqZ//lbX5+XfxPilurq8j0eK7uLgKhn1C4yRHHbpbwrHaqjRxmIjzBIXlclIVXyxG5l4z/hLrj/n3P8A4Et/8ar5+vxJiJVZNYzDy296OFly30uo3g20mnZtyun20ftVMj4YcacoYTMmm6q5PrkVUUFWk6VSu5Uo01VqUpQU6dGKhB03dyc7vlZ/9dL/AL7fzqKiivjp/HL/ABS/Nm8Pgj/hj+SCiiipKP/Z";
const CompassDesignSystem = () => {
  return (
    <div>
      <h1>Compass Design System</h1>

      <BlurImage
        alt="red mountains with snow"
        borderRadius="var(--br-large)"
        src={placeHolder}
        base64={placeHolderBase64}
      />

      <h2>Heading h2</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <BlurImage
        alt="red mountains with snow"
        borderRadius="var(--br-large)"
        src={placeHolder}
        base64={placeHolderBase64}
      />
      <h2>Heading h2</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default CompassDesignSystem;
