import {
  ConnectWallet,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0xE7b899B9b6025Fb2BFa1C604173674412D39c0DB"
  );
  const { data: numvalue, isLoading } = useContractRead(contract, "retireve");
  return (
    <main className={styles.main}>
      <div>
        <ConnectWallet />
      </div>
      <div>
        <h1> {isLoading ? "0" : numvalue.toNumber()}</h1>
      </div>
    </main>
  );
};

export default Home;
