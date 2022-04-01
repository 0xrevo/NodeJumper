import { Chain } from "../model/chain";

export const CHAINS: Chain[] = [
  {
    id: "rizon",
    chainName: "Rizon",
    chainId: "titan-1",
    snapshotServer: "https://snapshots.nodejumper.io",
    rpcServer1: "http://rpc1.nodejumper.io:26657",
    rpcServer2: "http://rpc2.nodejumper.io:26657",
    peer1: "0d51e8b9eb24f412dffc855c7bd854a8ecb3dff5@rpc1.nodejumper.io:26656",
    peer2: "422f0d89944ab2661c0fafe05c84302260fff94e@rpc2.nodejumper.io:26656",
    serviceName: "rizond",
    homeDirectoryName: ".rizon",
    twitter: "https://twitter.com/hdac_rizon",
    github: "https://github.com/rizon-world",
    globe: "https://rizon.world",
    medium: "https://medium.com/hdac",
    discord: "https://discord.com/invite/DvZFA7mpuX",
    coingekoCoinId: "rizon",
    validatorUrl: "https://ping.pub/rizon/staking/rizonvaloper1hy3em3nfngyntk7tre9d0626mj9swhu9ughurh"
  },
  {
    id: "bitcanna",
    chainName: "Bitcanna",
    chainId: "bitcanna-1",
    snapshotServer: "https://snapshots.nodejumper.io",
    rpcServer1: "http://rpc1.nodejumper.io:27657",
    rpcServer2: "http://rpc2.nodejumper.io:27657",
    peer1: "45589e6147e36dda9e429668484d7614fb25b142@rpc1.nodejumper.io:27656",
    peer2: "add5f91ecb28b785e8c6b51b0a4b17974196a035@rpc2.nodejumper.io:27656",
    serviceName: "bcnad",
    homeDirectoryName: ".bcna",
    twitter: "https://twitter.com/BitCannaGlobal",
    github: "https://github.com/BitCannaGlobal",
    globe: "https://www.bitcanna.io",
    medium: "https://medium.com/@bitcannaglobal",
    discord: "https://discord.com/invite/Bq9tRju6",
    coingekoCoinId: "bitcanna",
    validatorUrl: "https://ping.pub/bitcanna/staking/bcnavaloper1nlyurpgk5zcg6f6dcpdt2mq9khv27ajg4px45y"
  },
  {
    id: "kichain",
    chainName: "Ki Chain",
    chainId: "kichain-2",
    snapshotServer: "https://snapshots.nodejumper.io",
    rpcServer1: "http://rpc1.nodejumper.io:28657",
    rpcServer2: "http://rpc2.nodejumper.io:28657",
    peer1: "766ed622c79fa9cfd668db9741a1f72a5751e0cd@rpc1.nodejumper.io:28656",
    peer2: "9f825f1be8d3d4944f64e37b955f08877a964003@rpc2.nodejumper.io:28656",
    serviceName: "kid",
    homeDirectoryName: ".kid",
    twitter: "https://twitter.com/Ki_Foundation",
    github: "https://github.com/KiFoundation",
    globe: "https://foundation.ki",
    medium: "https://medium.com/ki-foundation",
    discord: "https://discord.gg/pJJhxPK6",
    coingekoCoinId: "ki",
    validatorUrl: "https://ping.pub/kichain/staking/kivaloper1q5vfka8z05t27jf4fuawpec99mvv9df90yc57a"
  },
  {
    id: "chihuahua",
    chainName: "Chihuahua",
    chainId: "chihuahua-1",
    snapshotServer: "https://snapshots.nodejumper.io",
    rpcServer1: "http://rpc1.nodejumper.io:29657",
    rpcServer2: "http://rpc2.nodejumper.io:29657",
    peer1: "c9b1385f81bec76dd6a84311de997d1e783dba53@rpc1.nodejumper.io:29656",
    peer2: "584ab034cafa8e9229c2b2fa2eda9ab0bb4e399e@rpc2.nodejumper.io:29656",
    serviceName: "chihuahuad",
    homeDirectoryName: ".chihuahua",
    twitter: "https://twitter.com/ChihuahuaChain",
    github: "https://github.com/chihuahuachain",
    globe: "https://www.chihuahua.wtf",
    medium: "https://medium.com/@chihuahuachain",
    discord: "https://discord.com/invite/AR38BTh4X8",
    coingekoCoinId: "chihuahua-token",
    validatorUrl: "https://ping.pub/chihuahua/staking/chihuahuavaloper1vdsd7zqpl3af46l08xkkc2zh6qhfhk6fp3s9pu"
  },
  {
    id: "desmos",
    chainName: "Desmos",
    chainId: "desmos-mainnet",
    snapshotServer: "https://snapshots.nodejumper.io",
    rpcServer1: "http://rpc1.nodejumper.io:32657",
    rpcServer2: "http://rpc2.nodejumper.io:32657",
    peer1: "f090ead239426219d605b392314bdd73d16a795f@rpc1.nodejumper.io:32656",
    peer2: "dc583d8bfa9971778dc479d8e0f6b9af0cbfe912@rpc2.nodejumper.io:32656",
    serviceName: "desmosd",
    binaryName: "desmos",
    homeDirectoryName: ".desmos",
    twitter: "https://twitter.com/DesmosNetwork",
    github: "https://github.com/desmos-labs",
    globe: "https://www.desmos.network/",
    medium: "https://medium.com/desmosnetwork",
    discord: "https://discord.com/invite/ckFcU5vxxc",
    coingekoCoinId: "desmos",
    validatorUrl: "https://ping.pub/desmos/staking/desmosvaloper184nr4azm7kwas40yzftfxy9ma2lrm5pp5q795x"
  },
  // {
  //   id: "akash",
  //   chainName: "Akash Network",
  //   chainId: "kichain-2",
  //   snapshotServer: "https://snapshots.nodejumper.io",
  //   rpcServer1: "http://rpc1.nodejumper.io:28657",
  //   rpcServer2: "http://rpc2.nodejumper.io:28657",
  //   peer1: "766ed622c79fa9cfd668db9741a1f72a5751e0cd@rpc1.nodejumper.io:28656",
  //   peer2: "9f825f1be8d3d4944f64e37b955f08877a964003@rpc2.nodejumper.io:28656",
  //   binaryName: "kid",
  //   homeDirectoryName: ".kid",
  //   twitter: "https://twitter.com/akashnet_",
  //   github: "https://github.com/ovrclk",
  //   globe: "https://akash.network",
  //   discord: "https://discord.com/invite/DxftX67",
  //   coingekoCoinId: "akash-network"
  // }
]
