//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";

// contract Greeter {
//     string private greeting;

//     constructor(string memory _greeting) {
//         console.log("Deploying a Greeter with greeting:", _greeting);
//         greeting = _greeting;
//     }

//     function greet() public view returns (string memory) {
//         return greeting;
//     }

//     function setGreeting(string memory _greeting) public {
//         console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
//         greeting = _greeting;
//     }
// }

contract Adoption {
    address[16] public adopters;

    // adopting a pet
    function adopt(uint petId) public returns (uint) {
      require(petId >= 0 && petId <= 15);

      adopters[petId] = msg.sender;

      return petId;
    }

    // Retrieving the adopters
    function getAdopters() public view returns (address[16] memory) {
      return adopters[0];
    }
}
