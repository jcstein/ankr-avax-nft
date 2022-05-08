// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // declare the version of solidity to compile this contract. This must match the version of solidity in your hardhat.config.js file


// import ERC-721 URI storage extension standard and Counters.sol which will help set token IDs from OpenZepplin
// add ownable and ERC721.sol
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// @dev This function instantiates the contract for AnkrPolygonNFT and classifies ERC-721 for storage schema
contract AnkrAvalancheNFT is ERC721URIStorage, Ownable {

/* @dev Set up our counters
* @param Counters will create unique TokenIds for each mint of the ERC-721 token
* @return This will return the current TokenId
*/
    using Counters for Counters.Counter;

/* @dev Store our counter
* @param The TokenId will be stored based on the current count
* @return This will store the current TokenId
*/
    Counters.Counter private _tokenIds;

// pass arguments for name and symbol
/* @dev Set the name and token tracker for our contract
* @param AnkrPolygonNFT will be the name of the ERC-721 token, and ANKRPG will be the token tracker
* @return This will name the token each time it is minted
*/
    constructor() ERC721("AnkrAvaxNFT", "ANKRAVAX") {}

/* @dev This will set the mint function for the token with the URI and recipient specified
* @param tokenURI specifies the schema and 
* @return This will set the name, image, description, and properties
*/
    function mint(address recipient, string memory tokenURI) public returns (uint256){

// increment the tokenId by one
        _tokenIds.increment();

// fetch the current tokenId and set the new tokenId
        uint256 newItemId = _tokenIds.current();

/* @dev Set the token owner by retrieving the address from recipient
* @param recipient is the wallet address for the receiver and newItemId is current tokenId
* @return Receiver of ERC-721 and tokenId
*/
        _safeMint(recipient, newItemId);

/* @dev Set the token URI and new TokenId
* @param newItemId is current tokenId and new tokenURI
* @return Current TokenId and tokenURI
*/
        _setTokenURI(newItemId, tokenURI);

// return current newItemId for the ERC-721 token
        return newItemId;
    }
}