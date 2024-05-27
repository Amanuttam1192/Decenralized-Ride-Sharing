// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RideSharing {
    
    struct Ride {
        address passenger;
        string name;
        string carModel;
        string origin;
        string destination;
        uint256 travelDate;
        uint256 passengers;
    }
    
    mapping(uint256 => Ride) public rides;
    uint256 public rideCount;
    
    string[] public carInventory = ["Audi A5", "VW Aerton", "Toyota Corolla", "BMW 530", "Kia Sportage"];
    string[] public destinations = ["Kanpur", "Delhi", "Ganj Basoda", "Lucknow"];
    
    event RideCreated(uint256 rideId, address passenger, string name, string carModel, string origin, string destination, uint256 travelDate, uint256 passengers);
    
    function createRide(string memory _name, string memory _carModel, string memory _origin, string memory _destination, uint256 _travelDate, uint256 _passengers) public {
        require(_travelDate > (block.timestamp / 1 days), "Travel date must be in the future");
        require(_passengers > 0, "Invalid number of passengers");
        require(bytes(_name).length > 0, "Name is required");
        require(bytes(_carModel).length > 0, "Car model is required");
        require(bytes(_origin).length > 0, "Origin is required");
        require(bytes(_destination).length > 0, "Destination is required");
        
        rides[rideCount] = Ride(msg.sender, _name, _carModel, _origin, _destination, _travelDate, _passengers);
        rideCount++;
        
        emit RideCreated(rideCount - 1, msg.sender, _name, _carModel, _origin, _destination, _travelDate, _passengers);
    }
    
    function getCarInventory() public view returns (string[] memory) {
        return carInventory;
    }
    
    function getDestinations() public view returns (string[] memory) {
        return destinations;
    }
}


