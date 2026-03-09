// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract InteniumCore {

    mapping(address => uint256) public balances;
    uint256 public totalValue;

    event ValueSacrificed(address user, uint256 amount);
    event ValueObtained(address user, uint256 amount);

    function sacrificeValue() public payable {
        require(msg.value > 0, "Sacrifice must have value");

        balances[msg.sender] += msg.value;
        totalValue += msg.value;

        emit ValueSacrificed(msg.sender, msg.value);
    }

    function obtainValue(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Not enough sacrificed value");

        balances[msg.sender] -= amount;
        totalValue -= amount;

        payable(msg.sender).transfer(amount);

        emit ValueObtained(msg.sender, amount);
    }

    function getBalance(address user) public view returns(uint256) {
        return balances[user];
    }
}
