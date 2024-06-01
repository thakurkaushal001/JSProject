

let numberofNFTs=0;
function mintNFT (name,age,gender){

const nft= {
      name: name,
      age: age,
      gender:gender

};


numberofNFTs++;
return nft;

}

const nftArray =[];

const firstNFT = mintNFT("Kaushal","19","Male");
nftArray.push(firstNFT);



const secondNFT = mintNFT("Hazelwood","25","Male");
nftArray.push(secondNFT);


const thirdNFT = mintNFT("Suzain","18","Female");
nftArray.push(thirdNFT);


function listNFTs(){

for (let i=0; i<nftArray.length;i++ ){
const nft = nftArray[i];
console.log("Name: " + nft.name);


console.log("Age: " + nft.age);


console.log("Gender: " + nft.gender);


console.log("..........................");

}

}

function getTotalSupply(){


console.log("Total no. of NFTs" + numberofNFTs);

}

listNFTs();

getTotalSupply();
