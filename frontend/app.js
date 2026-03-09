let provider;
let signer;

async function connectWallet() {

    if(window.ethereum){

        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        signer = await provider.getSigner();

        alert("Wallet connected");

    } else {

        alert("Install Metamask");

    }

}

async function sacrifice(){

    const tx = await signer.sendTransaction({
        to: "CONTRACT_ADDRESS",
        value: ethers.parseEther("0.01")
    });

    await tx.wait();

    alert("Value sacrificed.");
}
