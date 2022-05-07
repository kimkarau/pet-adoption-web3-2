const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Adoption", function () {
  let adoption, owner;
  before(async () => {
    // get contract factory
    const Adoption = await ethers.getContractFactory("Adoption");
    // get wallets to use, can return up to 10 test wallets
    const [_owner] = await ethers.getSigners();
    owner = _owner;

    adoption = await Adoption.deploy();
    await adoption.deployed();
  });

  describe("should adopt a pet", async function() {

     it("Should set a new adopter", async function () {
      const petId = ethers.BigNumber.from(3);

      await expect(adoption.connect(owner)
        .adopt(petId)
        ).to
          .emit(adoption, "PetAssigned")
          .withArgs(owner.address, petId);
    });

    it("should assign msg.sender to adopter", async function() {
      const petId = ethers.BigNumber.from(4);
      await adoption.connect(owner).adopt(petId);
      const sender = await adoption.adopters(petId);

      expect(sender).to.eq(owner.address);
    })

    it("should revert because pet does not exist", async function() {
      const petId = ethers.BigNumber.from(17);

      await expect(
        adoption.connect(owner).adopt(petId)
      ).to.be.revertedWith("Pet does not exist")
    })
  })

  it("should get adopters", async function() {
    const adopters = await adoption.getAdopters();

    console.log({ adopters })
  })
});
