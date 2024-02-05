import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [newValue, setNewVlaue] = useState(0);

  const address = useAddress(); // get the wallet address
  const { contract } = useContract(
    "0xE7b899B9b6025Fb2BFa1C604173674412D39c0DB"
  );
  const { data: numvalue, isLoading } = useContractRead(contract, "retireve"); //useContractRead(contractName, fucntionName,arguments);
  return (
    <main className={styles.main}>
      <div>
        <div>
          <ConnectWallet />
        </div>
        <div>
          {address && (
            <div>
              <input
                type="number"
                value={newValue}
                onChange={(e) => setNewVlaue(parseInt(e.target.value))}
              />
              <div>
                <Web3Button
                  contractAddress="0xE7b899B9b6025Fb2BFa1C604173674412D39c0DB"
                  action={(contract) => contract.call("store", [newValue])}
                  onSubmit={() => setNewVlaue(0)}
                  onSuccess={() => alert("Success!")}
                >
                  Set Value
                </Web3Button>
              </div>
              <h1> {isLoading ? "0" : numvalue.toNumber()} </h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
