/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ColorBox4,
  ColorBox4Interface,
} from "../../../contracts/ColorBox.sol/ColorBox4";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "initialColor",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "newValue",
        type: "string",
      },
    ],
    name: "ColorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newColor",
        type: "string",
      },
    ],
    name: "changeColor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newColor",
        type: "string",
      },
    ],
    name: "changeColorDryRun",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getColor",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161083938038061083983398101604081905261002f91610151565b61003833610052565b805161004b9060019060208401906100a2565b505061025b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546100ae90610220565b90600052602060002090601f0160209004810192826100d05760008555610116565b82601f106100e957805160ff1916838001178555610116565b82800160010185558215610116579182015b828111156101165782518255916020019190600101906100fb565b50610122929150610126565b5090565b5b808211156101225760008155600101610127565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561016457600080fd5b82516001600160401b038082111561017b57600080fd5b818501915085601f83011261018f57600080fd5b8151818111156101a1576101a161013b565b604051601f8201601f19908116603f011681019083821181831017156101c9576101c961013b565b8160405282815288868487010111156101e157600080fd5b600093505b8284101561020357848401860151818501870152928501926101e6565b828411156102145760008684830101525b98975050505050505050565b600181811c9082168061023457607f821691505b6020821081141561025557634e487b7160e01b600052602260045260246000fd5b50919050565b6105cf8061026a6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80636aa2afd514610067578063715018a61461007c5780638da5cb5b146100845780639a86139b146100a4578063ac7a25ee146100b9578063f2fde38b146100cc575b600080fd5b61007a610075366004610403565b6100df565b005b61007a61015c565b6000546040516001600160a01b0390911681526020015b60405180910390f35b6100ac610192565b60405161009b9190610475565b61007a6100c7366004610403565b610224565b61007a6100da3660046104ca565b61027f565b6000546001600160a01b031633146101125760405162461bcd60e51b8152600401610109906104fa565b60405180910390fd5b61011e6001838361036a565b507fea8482eb24fdcbd88250f9fd14644f201467fcaf3c5f08a0675ed9d46977ae3b828260405161015092919061052f565b60405180910390a15050565b6000546001600160a01b031633146101865760405162461bcd60e51b8152600401610109906104fa565b610190600061031a565b565b6060600180546101a19061055e565b80601f01602080910402602001604051908101604052809291908181526020018280546101cd9061055e565b801561021a5780601f106101ef5761010080835404028352916020019161021a565b820191906000526020600020905b8154815290600101906020018083116101fd57829003601f168201915b5050505050905090565b6000546001600160a01b0316331461024e5760405162461bcd60e51b8152600401610109906104fa565b7fea8482eb24fdcbd88250f9fd14644f201467fcaf3c5f08a0675ed9d46977ae3b828260405161015092919061052f565b6000546001600160a01b031633146102a95760405162461bcd60e51b8152600401610109906104fa565b6001600160a01b03811661030e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610109565b6103178161031a565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546103769061055e565b90600052602060002090601f01602090048101928261039857600085556103de565b82601f106103b15782800160ff198235161785556103de565b828001600101855582156103de579182015b828111156103de5782358255916020019190600101906103c3565b506103ea9291506103ee565b5090565b5b808211156103ea57600081556001016103ef565b6000806020838503121561041657600080fd5b823567ffffffffffffffff8082111561042e57600080fd5b818501915085601f83011261044257600080fd5b81358181111561045157600080fd5b86602082850101111561046357600080fd5b60209290920196919550909350505050565b600060208083528351808285015260005b818110156104a257858101830151858201604001528201610486565b818111156104b4576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156104dc57600080fd5b81356001600160a01b03811681146104f357600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b600181811c9082168061057257607f821691505b6020821081141561059357634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212201ad05dc7c53f49a67c3a19222a7a59050920334d14bbdeda22429d0a0a83132864736f6c63430008090033";

type ColorBox4ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ColorBox4ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ColorBox4__factory extends ContractFactory {
  constructor(...args: ColorBox4ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialColor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ColorBox4> {
    return super.deploy(initialColor, overrides || {}) as Promise<ColorBox4>;
  }
  override getDeployTransaction(
    initialColor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialColor, overrides || {});
  }
  override attach(address: string): ColorBox4 {
    return super.attach(address) as ColorBox4;
  }
  override connect(signer: Signer): ColorBox4__factory {
    return super.connect(signer) as ColorBox4__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ColorBox4Interface {
    return new utils.Interface(_abi) as ColorBox4Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ColorBox4 {
    return new Contract(address, _abi, signerOrProvider) as ColorBox4;
  }
}