//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Adoption {
    address[16] public adopters;

    event PetAssigned(address indexed petOwner, uint32 petId);

    // adopting a pet
    function adopt(uint32 petId) public {
      require(petId >= 0 && petId <= 15, "Pet does not exist");

      adopters[petId] = msg.sender;
      emit PetAssigned(msg.sender, petId);
    }

    // Retrieving the adopters
    function getAdopters() public view returns (address[16] memory) {
      // address[16] memory _adopters = adopters;
      return adopters;
    }
}
