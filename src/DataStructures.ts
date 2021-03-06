import { SinglyListNode } from "./shared/shared";

export class DataStructures {
  ArrayFunctions = class {
    deleteElement = (arr: any[], value: any) => {
      var index = arr.indexOf(value);
      if (index > -1) arr.splice(index, 1);
      return arr;
    };
    deleteAllElementOccurrences = (arr: any[], value: any) => {
      var i = 0;
      while (i < arr.length) {
        arr[i] === value ? arr.splice(i, 1) : ++i;
      }
      return arr;
    };
  };

  NumberFunctions = class {
    generateRandomNumberInRange = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min) + min);
  };

  StringFunctions = class {
    isStringEmpty = (inputString: string) =>
      inputString === undefined ||
      inputString === null ||
      inputString.trim() === ""
        ? true
        : false;

    generateAlphaNumericUpperOrLowerCaseString = (length: number) => {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    generateAlphaNumericUpperCaseString = (length: number) => {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    generateAlphaNumericLowerCaseString = (length: number) => {
      var result = "";
      var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    generateLowerCaseString = (length: number) => {
      var result = "";
      var characters = "abcdefghijklmnopqrstuvwxyz";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    generateUpperCaseString = (length: number) => {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };
  };

  ObjectFunctions = class {
    isObjectEmpty = (inputObject: {}) =>
      inputObject === null ||
      inputObject === undefined ||
      Object.keys(inputObject).length === 0
        ? true
        : false;
  };

  LinkedListFunctions = class {
    createSinglyLinkedListFromArray = (arr: any[]) => {
      let head = null;
      let randomNode = null;
      arr.forEach((el) => {
        if (!head) {
          head = new SinglyListNode(el);
          randomNode = head;
        } else {
          randomNode.next = new SinglyListNode(el);
          randomNode = randomNode.next;
        }
      });
      return head;
    };
  };
}
