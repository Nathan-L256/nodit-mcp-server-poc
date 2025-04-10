export default {
  "openapi": "3.1.1",
  "info": {
    "title": "Nodit Data API",
    "version": "v1"
  },
  "servers": [
    {
      "url": "https://web3.nodit.io/v1/{protocol}/{network}",
      "variables": {
        "protocol": {
          "enum": [
            "ethereum",
            "aptos",
            "polygon",
            "kaia",
            "arbitrum",
            "optimism"
          ],
          "default": "ethereum"
        },
        "network": {
          "enum": [
            "mainnet",
            "testnet",
            "sepolia",
            "holesky",
            "kairos"
          ],
          "default": "mainnet"
        }
      }
    }
  ],
  "security": [
    {
      "apiKey": []
    }
  ],
  "tags": [
    {
      "name": "blockchain",
      "description": "Blockchain API"
    },
    {
      "name": "native",
      "description": "Native Token API"
    },
    {
      "name": "token",
      "description": "Token API"
    },
    {
      "name": "nft",
      "description": "NFT API"
    },
    {
      "name": "ens",
      "description": "ENS API"
    },
    {
      "name": "stats",
      "description": "Statistics API"
    }
  ],
  "paths": {
    "/blockchain/getBlockByHashOrNumber": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getBlockByHashOrNumber",
        "description": "Retrieves detailed information about a specific block using its hash or number.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetBlockByHashOrNumberRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetBlockByHashOrNumberResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/getBlocksWithinRange": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getBlocksWithinRange",
        "description": "Retrieves a list of blocks within a specified block number or date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetBlocksWithinRangeRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetBlocksWithinRangeResponseContent"
                }
              }
            }
          }
        }
      }
    },
    "/blockchain/getTransactionByHash": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getTransactionByHash",
        "description": "Retrieves detailed information about a specific transaction using its hash.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTransactionByHashRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTransactionByHashResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/getTransactionsByHashes": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getTransactionsByHashes",
        "description": "Retrieves detailed information for multiple transactions using their hashes.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTransactionsByHashesRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTransactionsByHashesResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/getTransactionsInBlock": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getTransactionsInBlock",
        "description": "Retrieves a list of transactions included in a specific block.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTransactionsInBlockRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTransactionsInBlockResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/getTransactionsByAccount": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getTransactionsByAccount",
        "description": "Retrieves a list of transactions involving a specific account address, optionally filtered by block range and relation (from/to/both).",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTransactionsByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTransactionsByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/getInternalTransactionsByTransactionHash": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getInternalTransactionsByTransactionHash",
        "description": "Retrieves a list of internal transactions (message calls) generated by a specific external transaction.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetInternalTransactionsByTransactionHashRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetInternalTransactionsByTransactionHashResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/getInternalTransactionsByAccount": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getInternalTransactionsByAccount",
        "description": "Retrieves a list of internal transactions involving a specific account address, optionally filtered by block range and relation.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetInternalTransactionsByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetInternalTransactionsByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/searchEvents": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "searchEvents",
        "description": "Searches for specific contract events (logs) based on contract address, event names, ABI, and block range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SearchEventsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchEventsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/isContract": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "isContract",
        "description": "Checks if a given address is a smart contract.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/IsContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IsContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/getNextNonceByAccount": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getNextNonceByAccount",
        "description": "Retrieves the next transaction nonce for a given account address.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNextNonceByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNextNonceByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/blockchain/getGasPrice": {
      "post": {
        "tags": [
          "blockchain"
        ],
        "operationId": "getGasPrice",
        "description": "Retrieves current gas price estimations (high, average, low) and the latest base fee.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetGasPriceResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/native/getNativeBalanceByAccount": {
      "post": {
        "tags": [
          "native"
        ],
        "operationId": "getNativeBalanceByAccount",
        "description": "Retrieves the native token (e.g., ETH, MATIC) balance for a specific account address.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNativeBalanceRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNativeBalanceResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/getTokenAllowance": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "getTokenAllowance",
        "description": "Retrieves the token allowance granted by an owner to a spender for a specific ERC20 token contract.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTokenAllowanceRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTokenAllowanceResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/getTokenContractMetadataByContracts": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "getTokenContractMetadataByContracts",
        "description": "Retrieves metadata (name, symbol, decimals, etc.) for multiple token contracts.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTokenContractMetadataByContractsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTokenContractMetadataByContractsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/searchTokenContractMetadataByKeyword": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "searchTokenContractMetadataByKeyword",
        "description": "Searches for token contracts by keyword (matching name or symbol).",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SearchTokenContractMetadataByKeywordRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchTokenContractMetadataByKeywordResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/getTokenPricesByContracts": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "getTokenPricesByContracts",
        "description": "Retrieves current market price information for specified token contracts.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTokenPricesByContractsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTokenPricesByContractsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/getTokenHoldersByContract": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "getTokenHoldersByContract",
        "description": "Retrieves a list of holders for a specific token contract and their balances.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTokenHoldersByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTokenHoldersByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/getTokensOwnedByAccount": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "getTokensOwnedByAccount",
        "description": "Retrieves a list of tokens owned by a specific account address, along with their balances.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTokensOwnedByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTokensOwnedByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/getTokenTransfersWithinRange": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "getTokenTransfersWithinRange",
        "description": "Retrieves a list of token transfers within a specified block number or date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTokenTransfersWithinRangeRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTokenTransfersWithinRangeResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/getTokenTransfersByContract": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "getTokenTransfersByContract",
        "description": "Retrieves a list of token transfers for a specific token contract, optionally filtered by block range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTokenTransfersByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTokenTransfersByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/token/getTokenTransfersByAccount": {
      "post": {
        "tags": [
          "token"
        ],
        "operationId": "getTokenTransfersByAccount",
        "description": "Retrieves a list of token transfers involving a specific account address, optionally filtered by block range, relation, and specific contracts.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetTokenTransfersByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetTokenTransfersByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftContractMetadataByContracts": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftContractMetadataByContracts",
        "description": "Retrieves metadata (name, symbol, type) for multiple NFT contracts.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftContractMetadataByContractsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftContractMetadataByContractsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/searchNftContractMetadataByKeyword": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "searchNftContractMetadataByKeyword",
        "description": "Searches for NFT contracts by keyword (matching name or symbol).",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SearchNftContractMetadataByKeywordRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchNftContractMetadataByKeywordResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftMetadataByContract": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftMetadataByContract",
        "description": "Retrieves metadata for all NFTs within a specific NFT contract.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftMetadataByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftMetadataByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftMetadataByTokenIds": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftMetadataByTokenIds",
        "description": "Retrieves metadata for specific NFTs identified by their contract address and token ID.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftMetadataByTokenIdsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftMetadataByTokenIdsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftContractsByAccount": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftContractsByAccount",
        "description": "Retrieves a list of NFT contracts owned by a specific account, along with the balance of NFTs held in each contract.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftContractsByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftContractsByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftContractMetadataByContract": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftContractMetadataByContract",
        "description": "Retrieves metadata for a single specific NFT contract.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftContractMetadataByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftContractMetadataByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftHoldersByContract": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftHoldersByContract",
        "description": "Retrieves a list of holders for a specific NFT contract and their balances.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftHoldersByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftHoldersByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftHoldersByTokenId": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftHoldersByTokenId",
        "description": "Retrieves the holder(s) of a specific NFT identified by its contract address and token ID.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftHoldersByTokenIdRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftHoldersByTokenIdResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftsOwnedByAccount": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftsOwnedByAccount",
        "description": "Retrieves a list of specific NFTs owned by an account, including their contract and token ID.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftsOwnedByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftsOwnedByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftTransfersWithinRange": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftTransfersWithinRange",
        "description": "Retrieves a list of NFT transfers across all contracts within a specified block number or date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftTransfersWithinRangeRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftTransfersWithinRangeResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftTransfersByContract": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftTransfersByContract",
        "description": "Retrieves a list of NFT transfers for a specific NFT contract, optionally filtered by block range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftTransfersByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftTransfersByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftTransfersByTokenId": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftTransfersByTokenId",
        "description": "Retrieves the transfer history for a specific NFT identified by its contract address and token ID.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftTransfersByTokenIdRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftTransfersByTokenIdResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/nft/getNftTransfersByAccount": {
      "post": {
        "tags": [
          "nft"
        ],
        "operationId": "getNftTransfersByAccount",
        "description": "Retrieves a list of NFT transfers involving a specific account address, optionally filtered by block range, relation, and specific contracts.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetNftTransfersByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNftTransfersByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/ens/getAddressByEnsName": {
      "post": {
        "tags": [
          "ens"
        ],
        "operationId": "getAddressByEnsName",
        "description": "Resolves an ENS (Ethereum Name Service) name to its primary Ethereum address.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetAddressByEnsNameRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAddressByEnsNameResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/ens/getEnsNameByAddress": {
      "post": {
        "tags": [
          "ens"
        ],
        "operationId": "getEnsNameByAddress",
        "description": "Performs reverse resolution to find the primary ENS name associated with an Ethereum address.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetEnsNameByAddressRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetEnsNameByAddressResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/ens/getEnsRecordByName": {
      "post": {
        "tags": [
          "ens"
        ],
        "operationId": "getEnsRecordByName",
        "description": "Retrieves the full ENS record details for a given ENS name, including owner, resolver, text records, etc.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetEnsRecordByNameRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetEnsRecordByNameResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/ens/getEnsRecordsByAccount": {
      "post": {
        "tags": [
          "ens"
        ],
        "operationId": "getEnsRecordsByAccount",
        "description": "Retrieves all ENS records owned by or resolving to a specific Ethereum address.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetEnsRecordsByAccountRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetEnsRecordsByAccountResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/stats/getAccountStats": {
      "post": {
        "tags": [
          "stats"
        ],
        "operationId": "getAccountStats",
        "description": "Retrieves summary statistics for a specific account, including transaction counts, transfer counts, and asset counts.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetAccountStatsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAccountStatsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/stats/getHourlyActiveAccountsStats": {
      "post": {
        "tags": [
          "stats"
        ],
        "operationId": "getHourlyActiveAccountsStats",
        "description": "Retrieves the number of unique active accounts on the network per hour within a specified date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/stats/getHourlyActiveAccountsStatsByContract": {
      "post": {
        "tags": [
          "stats"
        ],
        "operationId": "getHourlyActiveAccountsStatsByContract",
        "description": "Retrieves the number of unique active accounts interacting with a specific contract per hour within a specified date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/stats/getDailyActiveAccountsStatsByContract": {
      "post": {
        "tags": [
          "stats"
        ],
        "operationId": "getDailyActiveAccountsStatsByContract",
        "description": "Retrieves the number of unique active accounts interacting with a specific contract per day within a specified date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetDailyActiveAccountsStatsByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetDailyActiveAccountsStatsByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/stats/getHourlyTransactionsStats": {
      "post": {
        "tags": [
          "stats"
        ],
        "operationId": "getHourlyTransactionsStats",
        "description": "Retrieves the total number of transactions on the network per hour within a specified date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetHourlyTransactionsStatsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetHourlyTransactionsStatsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/stats/getHourlyTransactionsStatsByContract": {
      "post": {
        "tags": [
          "stats"
        ],
        "operationId": "getHourlyTransactionsStatsByContract",
        "description": "Retrieves the total number of transactions interacting with a specific contract per hour within a specified date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetHourlyTransactionsStatsByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetHourlyTransactionsStatsByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/stats/getDailyTransactionsStats": {
      "post": {
        "tags": [
          "stats"
        ],
        "operationId": "getDailyTransactionsStats",
        "description": "Retrieves the total number of transactions on the network per day within a specified date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetDailyTransactionsStatsRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetDailyTransactionsStatsResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    },
    "/stats/getDailyTransactionsStatsByContract": {
      "post": {
        "tags": [
          "stats"
        ],
        "operationId": "getDailyTransactionsStatsByContract",
        "description": "Retrieves the total number of transactions interacting with a specific contract per day within a specified date range.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GetDailyTransactionsStatsByContractRequestContent"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetDailyTransactionsStatsByContractResponseContent"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequestResponse"
          },
          "401": {
            "$ref": "#/components/responses/UnauthorizedResponse"
          },
          "403": {
            "$ref": "#/components/responses/ForbiddenResponse"
          },
          "404": {
            "$ref": "#/components/responses/NotFoundResponse"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequestsResponse"
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "apiKey": {
        "type": "apiKey",
        "in": "header",
        "name": "X-Api-Key"
      }
    },
    "schemas": {
      "UnsignedInteger": {
        "type": "integer",
        "format": "int64",
        "minimum": 0,
        "maximum": 9007199254740991
      },
      "DecimalIntegerString": {
        "type": "string",
        "pattern": "^(?:-?[1-9]\\d{0,77}|0)$"
      },
      "UnsignedDecimalIntegerString": {
        "type": "string",
        "pattern": "^(?:[1-9]\\d{0,77}|0)$"
      },
      "UnsignedHexadecimalIntegerString": {
        "type": "string",
        "pattern": "^0x(?:[1-9a-f][\\da-f]{0,63}|0)$"
      },
      "FloatString": {
        "type": "string",
        "pattern": "^(?:-?[1-9]\\d*|0)(?:\\.\\d+)$"
      },
      "UnsignedFloatString": {
        "type": "string",
        "pattern": "^(?:[1-9]\\d*|0)(?:\\.\\d+)$"
      },
      "Bytes": {
        "type": "string",
        "pattern": "^0x[\\da-f]*$"
      },
      "Bytes4": {
        "type": "string",
        "pattern": "^0x[\\da-f]{8}$"
      },
      "Bytes32": {
        "type": "string",
        "pattern": "^0x[\\da-f]{64}$"
      },
      "Bytes256": {
        "type": "string",
        "pattern": "^0x[\\da-f]{512}$"
      },
      "Address": {
        "type": "string",
        "pattern": "^0x[\\dA-Fa-f]{40}$"
      },
      "BlockTag": {
        "type": "string",
        "enum": [
          "earliest",
          "latest"
        ]
      },
      "Relation": {
        "type": "string",
        "enum": [
          "both",
          "from",
          "to"
        ],
        "default": "both"
      },
      "BlockId": {
        "oneOf": [
          {
            "$ref": "#/components/schemas/Bytes32"
          },
          {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          {
            "$ref": "#/components/schemas/BlockTag"
          }
        ]
      },
      "Block": {
        "type": "object",
        "properties": {
          "hash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "number": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "timestamp": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "parentHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "nonce": {
            "$ref": "#/components/schemas/UnsignedHexadecimalIntegerString"
          },
          "stateRoot": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "receiptsRoot": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "transactionsRoot": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "miner": {
            "$ref": "#/components/schemas/Address"
          },
          "difficulty": {
            "$ref": "#/components/schemas/UnsignedHexadecimalIntegerString"
          },
          "totalDifficulty": {
            "$ref": "#/components/schemas/UnsignedHexadecimalIntegerString"
          },
          "mixHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "gasLimit": {
            "$ref": "#/components/schemas/UnsignedHexadecimalIntegerString"
          },
          "gasUsed": {
            "$ref": "#/components/schemas/UnsignedHexadecimalIntegerString"
          },
          "baseFeePerGas": {
            "$ref": "#/components/schemas/UnsignedHexadecimalIntegerString"
          },
          "size": {
            "$ref": "#/components/schemas/UnsignedHexadecimalIntegerString"
          },
          "logsBloom": {
            "$ref": "#/components/schemas/Bytes256"
          },
          "extraData": {
            "$ref": "#/components/schemas/Bytes"
          },
          "sha3Uncles": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "transactionCount": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Bytes32"
            }
          },
          "withdrawalRoot": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "withdrawals": {
            "oneOf": [
              {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "index": {
                      "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
                    },
                    "validatorIndex": {
                      "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
                    },
                    "address": {
                      "$ref": "#/components/schemas/Address"
                    },
                    "amount": {
                      "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
                    }
                  },
                  "required": [
                    "index",
                    "validatorIndex",
                    "address",
                    "amount"
                  ]
                }
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "hash",
          "number",
          "timestamp",
          "parentHash",
          "nonce",
          "stateRoot",
          "receiptsRoot",
          "transactionsRoot",
          "miner",
          "difficulty",
          "totalDifficulty",
          "mixHash",
          "gasLimit",
          "gasUsed",
          "size",
          "logsBloom",
          "extraData",
          "sha3Uncles",
          "transactionCount",
          "transactions"
        ]
      },
      "Log": {
        "type": "object",
        "properties": {
          "contractAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "transactionHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "transactionIndex": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "blockHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "blockNumber": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "data": {
            "$ref": "#/components/schemas/Bytes"
          },
          "logIndex": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "removed": {
            "type": "boolean"
          },
          "topics": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Bytes32"
            }
          },
          "decodedLog": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "eventFragment": {
                "type": "string"
              },
              "signature": {
                "type": "string"
              },
              "eventHash": {
                "$ref": "#/components/schemas/Bytes32"
              },
              "args": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    },
                    "value": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "type",
                    "value"
                  ]
                }
              }
            },
            "required": [
              "name",
              "eventFragment",
              "signature",
              "eventHash",
              "args"
            ]
          }
        },
        "required": [
          "contractAddress",
          "transactionHash",
          "transactionIndex",
          "blockHash",
          "blockNumber",
          "data",
          "logIndex",
          "topics"
        ]
      },
      "Transaction": {
        "type": "object",
        "properties": {
          "transactionHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "transactionIndex": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "blockHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "blockNumber": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "from": {
            "$ref": "#/components/schemas/Address"
          },
          "to": {
            "oneOf": [
              {
                "$ref": "#/components/schemas/Address"
              },
              {
                "type": "null"
              }
            ]
          },
          "value": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "input": {
            "$ref": "#/components/schemas/Bytes"
          },
          "decodedInput": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "signature": {
                "type": "string"
              },
              "args": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "type": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "functionSelector": {
            "$ref": "#/components/schemas/Bytes4"
          },
          "nonce": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "gas": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "gasPrice": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "maxFeePerGas": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "maxPriorityFeePerGas": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "gasUsed": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "cumulativeGasUsed": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "effectGasPrice": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "contractAddress": {
            "oneOf": [
              {
                "$ref": "#/components/schemas/Address"
              },
              {
                "type": "null"
              }
            ]
          },
          "type": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "status": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "logsBloom": {
            "$ref": "#/components/schemas/Bytes256"
          },
          "accessList": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "address": {
                  "$ref": "#/components/schemas/Address"
                },
                "storageKeys": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Bytes32"
                  }
                }
              },
              "required": [
                "address",
                "storageKeys"
              ]
            }
          },
          "timestamp": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "logs": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Log"
            }
          }
        },
        "required": [
          "transactionHash",
          "transactionIndex",
          "blockHash",
          "blockNumber",
          "from",
          "to",
          "value",
          "input",
          "functionSelector",
          "nonce",
          "gas",
          "gasPrice",
          "gasUsed",
          "cumulativeGasUsed",
          "contractAddress",
          "logsBloom"
        ]
      },
      "InternalTransaction": {
        "type": "object",
        "properties": {
          "traceId": {
            "type": "string",
            "pattern": "^call_([1-9]\\d{0,77}|0)_([1-9]\\d{0,77}|0)_(?:([1-9]\\d{0,77}|0)(?:_([1-9]\\d{0,77}|0))*)?$"
          },
          "traceIndex": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "transactionHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "transactionIndex": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "from": {
            "$ref": "#/components/schemas/Address"
          },
          "to": {
            "oneOf": [
              {
                "$ref": "#/components/schemas/Address"
              },
              {
                "type": "null"
              }
            ]
          },
          "value": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "traceType": {
            "type": "string",
            "example": "call"
          },
          "callType": {
            "type": "string",
            "example": "call"
          },
          "gas": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "gasUsed": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "status": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "blockNumber": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "timestamp": {
            "$ref": "#/components/schemas/UnsignedInteger"
          }
        },
        "required": [
          "traceId",
          "traceIndex",
          "transactionHash",
          "transactionIndex",
          "from",
          "to",
          "value",
          "blockNumber",
          "timestamp"
        ]
      },
      "TokenContract": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address"
          },
          "deployedTransactionHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "deployedAt": {
            "type": "string",
            "format": "date-time"
          },
          "deployerAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "logoUrl": {
            "anyOf": [
              {
                "type": "string",
                "format": "uri"
              },
              {
                "type": "null"
              }
            ]
          },
          "type": {
            "type": "string",
            "example": "ERC20"
          },
          "name": {
            "type": "string",
            "example": "Tether USD"
          },
          "symbol": {
            "type": "string",
            "example": "USDT"
          },
          "totalSupply": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "decimals": {
            "$ref": "#/components/schemas/UnsignedInteger"
          }
        },
        "required": [
          "address",
          "deployedTransactionHash",
          "deployedAt",
          "deployerAddress",
          "logoUrl",
          "type",
          "name",
          "symbol"
        ]
      },
      "TokenPrice": {
        "type": "object",
        "properties": {
          "currency": {
            "type": "string",
            "example": "USD"
          },
          "price": {
            "$ref": "#/components/schemas/UnsignedFloatString"
          },
          "volumeFor24h": {
            "$ref": "#/components/schemas/UnsignedFloatString"
          },
          "volumeChangeFor24h": {
            "$ref": "#/components/schemas/FloatString"
          },
          "percentChangeFor1h": {
            "$ref": "#/components/schemas/FloatString"
          },
          "percentChangeFor24h": {
            "$ref": "#/components/schemas/FloatString"
          },
          "percentChangeFor7d": {
            "$ref": "#/components/schemas/FloatString"
          },
          "marketCap": {
            "$ref": "#/components/schemas/UnsignedFloatString"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          },
          "listings": {
            "type": "array",
            "items": {
              "type": "string",
              "example": "Binance"
            }
          },
          "contract": {
            "$ref": "#/components/schemas/TokenContract"
          }
        }
      },
      "TokenHolder": {
        "type": "object",
        "properties": {
          "ownerAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "balance": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          }
        },
        "required": [
          "ownerAddress",
          "balance"
        ]
      },
      "TokenHolding": {
        "allOf": [
          {
            "$ref": "#/components/schemas/TokenHolder"
          },
          {
            "properties": {
              "contract": {
                "$ref": "#/components/schemas/TokenContract"
              }
            },
            "required": [
              "contract"
            ]
          }
        ]
      },
      "TokenTransfer": {
        "type": "object",
        "properties": {
          "from": {
            "$ref": "#/components/schemas/Address"
          },
          "to": {
            "$ref": "#/components/schemas/Address"
          },
          "value": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "timestamp": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "blockNumber": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "transactionHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "logIndex": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "contract": {
            "$ref": "#/components/schemas/TokenContract"
          }
        },
        "required": [
          "from",
          "to",
          "value",
          "timestamp",
          "blockNumber",
          "transactionHash",
          "logIndex",
          "contract"
        ]
      },
      "NftContract": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address"
          },
          "deployedTransactionHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "deployedAt": {
            "type": "string",
            "format": "date-time"
          },
          "deployerAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "logoUrl": {
            "anyOf": [
              {
                "type": "string",
                "format": "uri"
              },
              {
                "type": "null"
              }
            ]
          },
          "type": {
            "type": "string",
            "example": "ERC721"
          },
          "name": {
            "type": "string",
            "example": "BoredApeYachtClub"
          },
          "symbol": {
            "type": "string",
            "example": "BAYC"
          }
        },
        "required": [
          "address",
          "deployedTransactionHash",
          "deployedAt",
          "deployerAddress",
          "logoUrl",
          "type",
          "name",
          "symbol"
        ]
      },
      "NftContractWithBalance": {
        "properties": {
          "contract": {
            "$ref": "#/components/schemas/NftContract"
          },
          "totalBalance": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "uniqueBalance": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          }
        },
        "required": [
          "contract",
          "totalBalance",
          "uniqueBalance"
        ]
      },
      "Nft": {
        "type": "object",
        "properties": {
          "tokenId": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "tokenUri": {
            "anyOf": [
              {
                "type": "string",
                "format": "uri"
              },
              {
                "type": "null"
              }
            ]
          },
          "tokenUriSyncedAt": {
            "type": "string",
            "format": "date-time"
          },
          "rawMetadata": {
            "type": "string",
            "format": "json",
            "example": "{\"name\":\"Example#0\",\"description\":\"Example NFT #0\",\"image\":\"https://placehold.co/512\"}"
          },
          "metadataSyncedAt": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "tokenId",
          "tokenUri",
          "tokenUriSyncedAt"
        ]
      },
      "NftWithContract": {
        "allOf": [
          {
            "properties": {
              "contract": {
                "$ref": "#/components/schemas/NftContract"
              }
            },
            "required": [
              "contract"
            ]
          },
          {
            "$ref": "#/components/schemas/Nft"
          }
        ]
      },
      "NftHolder": {
        "allOf": [
          {
            "properties": {
              "ownerAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "totalBalance": {
                "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
              },
              "uniqueBalance": {
                "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
              }
            },
            "required": [
              "ownerAddress",
              "totalBalance",
              "uniqueBalance"
            ]
          }
        ]
      },
      "NftHolding": {
        "properties": {
          "contract": {
            "$ref": "#/components/schemas/NftContract"
          },
          "ownerAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "balance": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "tokenId": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "tokenUri": {
            "anyOf": [
              {
                "type": "string",
                "format": "uri"
              },
              {
                "type": "null"
              }
            ]
          },
          "tokenUriSyncedAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "contract",
          "ownerAddress",
          "balance",
          "tokenId",
          "tokenUri",
          "tokenUriSyncedAt"
        ]
      },
      "NftTransfer": {
        "type": "object",
        "properties": {
          "from": {
            "$ref": "#/components/schemas/Address"
          },
          "to": {
            "$ref": "#/components/schemas/Address"
          },
          "value": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "timestamp": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "blockNumber": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "transactionHash": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "logIndex": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "batchIndex": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "contract": {
            "$ref": "#/components/schemas/NftContract"
          },
          "nft": {
            "$ref": "#/components/schemas/Nft"
          }
        },
        "required": [
          "from",
          "to",
          "value",
          "timestamp",
          "blockNumber",
          "transactionHash",
          "logIndex",
          "contract",
          "nft"
        ]
      },
      "EnsRecord": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "vitalik.eth"
          },
          "isMigrated": {
            "type": "boolean"
          },
          "isPrimaryName": {
            "type": "boolean"
          },
          "node": {
            "$ref": "#/components/schemas/Bytes32"
          },
          "labelName": {
            "type": "string"
          },
          "labelHash": {
            "type": "string"
          },
          "ownerAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "resolver": {
            "type": "object",
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "resolvedAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "text": {
                "type": "object",
                "additionalProperties": {
                  "type": "string"
                }
              },
              "contentHash": {
                "$ref": "#/components/schemas/Bytes32"
              }
            },
            "required": [
              "contractAddress",
              "resolvedAddress",
              "text",
              "contentHash"
            ]
          },
          "registration": {
            "type": "object",
            "properties": {
              "registrantAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "registrationDate": {
                "type": "string",
                "format": "date-time"
              },
              "expiryDate": {
                "type": "string",
                "format": "date-time"
              },
              "cost": {
                "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
              }
            },
            "required": [
              "registrantAddress",
              "registrationDate",
              "expiryDate",
              "cost"
            ]
          },
          "nameWrapper": {
            "type": "object",
            "properties": {
              "contractAddress": {
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/Address"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "wrappedOwnerAddress": {
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/Address"
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "contractAddress",
              "wrappedOwnerAddress"
            ]
          }
        },
        "required": [
          "name",
          "isMigrated",
          "isPrimaryName",
          "node",
          "labelName",
          "labelHash",
          "ownerAddress",
          "resolver",
          "registration",
          "nameWrapper"
        ]
      },
      "PageRequestContent": {
        "type": "object",
        "properties": {
          "rpp": {
            "type": "integer",
            "format": "int64",
            "minimum": 0,
            "maximum": 100,
            "default": 10
          },
          "page": {
            "type": "integer",
            "format": "int64",
            "minimum": 1,
            "maximum": 100,
            "default": 1
          },
          "cursor": {
            "type": "string",
            "contentEncoding": "base64"
          },
          "withCount": {
            "type": "boolean",
            "default": false
          }
        }
      },
      "PageResponseContent": {
        "type": "object",
        "properties": {
          "rpp": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "page": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "cursor": {
            "type": "string",
            "contentEncoding": "base64"
          },
          "count": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "items": {
            "type": "array"
          }
        },
        "required": [
          "rpp",
          "items"
        ]
      },
      "BlockRangeRequestContent": {
        "type": "object",
        "properties": {
          "fromBlock": {
            "$ref": "#/components/schemas/BlockId"
          },
          "toBlock": {
            "$ref": "#/components/schemas/BlockId"
          },
          "fromDate": {
            "type": "string",
            "format": "date-time"
          },
          "toDate": {
            "type": "string",
            "format": "date-time"
          }
        }
      },
      "TransactionRequestContent": {
        "type": "object",
        "properties": {
          "withLogs": {
            "type": "boolean",
            "default": false
          },
          "withDecode": {
            "type": "boolean",
            "default": false
          }
        }
      },
      "InternalTransactionRequestContent": {
        "type": "object",
        "properties": {
          "withExternalTransaction": {
            "type": "boolean",
            "default": false
          }
        }
      },
      "TransferRequestContent": {
        "type": "object",
        "properties": {
          "withZeroValue": {
            "type": "boolean",
            "default": false
          }
        }
      },
      "NftRequestContent": {
        "type": "object",
        "properties": {
          "withMetadata": {
            "type": "boolean",
            "default": false
          }
        }
      },
      "ErrorResponseContent": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "message"
        ]
      },
      "GetBlockByHashOrNumberRequestContent": {
        "type": "object",
        "properties": {
          "block": {
            "$ref": "#/components/schemas/BlockId"
          }
        },
        "required": [
          "block"
        ]
      },
      "GetBlockByHashOrNumberResponseContent": {
        "$ref": "#/components/schemas/Block"
      },
      "GetBlocksWithinRangeRequestContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/BlockRangeRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetBlocksWithinRangeResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Block"
                }
              }
            }
          }
        ]
      },
      "GetTransactionByHashRequestContent": {
        "allOf": [
          {
            "properties": {
              "transactionHash": {
                "$ref": "#/components/schemas/Bytes32"
              }
            },
            "required": [
              "transactionHash"
            ]
          },
          {
            "$ref": "#/components/schemas/TransactionRequestContent"
          }
        ]
      },
      "GetTransactionByHashResponseContent": {
        "$ref": "#/components/schemas/Transaction"
      },
      "GetTransactionsByHashesRequestContent": {
        "allOf": [
          {
            "properties": {
              "transactionHashes": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Bytes32"
                },
                "maxItems": 100
              }
            },
            "required": [
              "transactionHashes"
            ]
          },
          {
            "$ref": "#/components/schemas/TransactionRequestContent"
          }
        ]
      },
      "GetTransactionsByHashesResponseContent": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Transaction"
        }
      },
      "GetTransactionsInBlockRequestContent": {
        "allOf": [
          {
            "properties": {
              "block": {
                "$ref": "#/components/schemas/BlockId"
              }
            },
            "required": [
              "block"
            ]
          },
          {
            "$ref": "#/components/schemas/TransactionRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetTransactionsInBlockResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Transaction"
                }
              }
            }
          }
        ]
      },
      "GetTransactionsByAccountRequestContent": {
        "allOf": [
          {
            "properties": {
              "accountAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "relation": {
                "$ref": "#/components/schemas/Relation"
              }
            },
            "required": [
              "accountAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/BlockRangeRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetTransactionsByAccountResponseContent": {
        "$ref": "#/components/schemas/GetTransactionsInBlockResponseContent"
      },
      "GetInternalTransactionsByTransactionHashRequestContent": {
        "allOf": [
          {
            "properties": {
              "transactionHash": {
                "$ref": "#/components/schemas/Bytes32"
              }
            },
            "required": [
              "transactionHash"
            ]
          },
          {
            "$ref": "#/components/schemas/TransferRequestContent"
          },
          {
            "$ref": "#/components/schemas/InternalTransactionRequestContent"
          },
          {
            "$ref": "#/components/schemas/BlockRangeRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetInternalTransactionsByTransactionHashResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InternalTransaction"
                }
              }
            }
          }
        ]
      },
      "GetInternalTransactionsByAccountRequestContent": {
        "allOf": [
          {
            "properties": {
              "accountAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "relation": {
                "$ref": "#/components/schemas/Relation"
              }
            },
            "required": [
              "accountAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/TransferRequestContent"
          },
          {
            "$ref": "#/components/schemas/InternalTransactionRequestContent"
          },
          {
            "$ref": "#/components/schemas/BlockRangeRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetInternalTransactionsByAccountResponseContent": {
        "$ref": "#/components/schemas/GetInternalTransactionsByTransactionHashResponseContent"
      },
      "SearchEventsRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "eventNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "example": "Transfer"
                }
              },
              "abi": {
                "type": "string",
                "format": "json",
                "example": "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]"
              }
            },
            "required": [
              "contractAddress",
              "eventNames",
              "abi"
            ]
          },
          {
            "$ref": "#/components/schemas/BlockRangeRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "SearchEventsResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Log"
                }
              }
            }
          }
        ]
      },
      "IsContractRequestContent": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address"
          }
        },
        "required": [
          "address"
        ]
      },
      "IsContractResponseContent": {
        "type": "object",
        "properties": {
          "result": {
            "type": "boolean"
          }
        },
        "required": [
          "result"
        ]
      },
      "GetNextNonceByAccountRequestContent": {
        "type": "object",
        "properties": {
          "accountAddress": {
            "$ref": "#/components/schemas/Address"
          }
        },
        "required": [
          "accountAddress"
        ]
      },
      "GetNextNonceByAccountResponseContent": {
        "type": "object",
        "properties": {
          "nonce": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          }
        },
        "required": [
          "nonce"
        ]
      },
      "GetGasPriceResponseContent": {
        "type": "object",
        "properties": {
          "high": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "average": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "low": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "latestBlock": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          },
          "baseFee": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          }
        },
        "required": [
          "high",
          "average",
          "low",
          "latestBlock",
          "baseFee"
        ]
      },
      "GetNativeBalanceRequestContent": {
        "type": "object",
        "properties": {
          "accountAddress": {
            "$ref": "#/components/schemas/Address"
          }
        },
        "required": [
          "accountAddress"
        ]
      },
      "GetNativeBalanceResponseContent": {
        "type": "object",
        "properties": {
          "ownerAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "balance": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          }
        },
        "required": [
          "ownerAddress",
          "balance"
        ]
      },
      "GetTokenAllowanceRequestContent": {
        "type": "object",
        "properties": {
          "contractAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "ownerAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "spenderAddress": {
            "$ref": "#/components/schemas/Address"
          }
        },
        "required": [
          "contractAddress",
          "ownerAddress",
          "spenderAddress"
        ]
      },
      "GetTokenAllowanceResponseContent": {
        "type": "object",
        "properties": {
          "allowance": {
            "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
          }
        },
        "required": [
          "allowance"
        ]
      },
      "GetTokenContractMetadataByContractsRequestContent": {
        "type": "object",
        "properties": {
          "contractAddresses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Address"
            }
          }
        },
        "required": [
          "contractAddresses"
        ]
      },
      "GetTokenContractMetadataByContractsResponseContent": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/TokenContract"
        }
      },
      "SearchTokenContractMetadataByKeywordRequestContent": {
        "allOf": [
          {
            "properties": {
              "keyword": {
                "type": "string",
                "example": "USDT"
              }
            },
            "required": [
              "keyword"
            ]
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "SearchTokenContractMetadataByKeywordResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TokenContract"
                }
              }
            }
          }
        ]
      },
      "GetTokenPricesByContractsRequestContent": {
        "type": "object",
        "properties": {
          "contractAddresses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Address"
            }
          },
          "currency": {
            "type": "string",
            "example": "USD"
          }
        },
        "required": [
          "contractAddresses"
        ]
      },
      "GetTokenPricesByContractsResponseContent": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/TokenPrice"
        }
      },
      "GetTokenHoldersByContractRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              }
            },
            "required": [
              "contractAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetTokenHoldersByContractResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TokenHolder"
                }
              }
            }
          }
        ]
      },
      "GetTokensOwnedByAccountRequestContent": {
        "allOf": [
          {
            "properties": {
              "accountAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "contractAddresses": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Address"
                }
              }
            },
            "required": [
              "accountAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetTokensOwnedByAccountResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TokenHolding"
                }
              }
            }
          }
        ]
      },
      "GetTokenTransfersWithinRangeRequestContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/BlockRangeRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          },
          {
            "$ref": "#/components/schemas/TransferRequestContent"
          }
        ]
      },
      "GetTokenTransfersWithinRangeResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TokenTransfer"
                }
              }
            }
          }
        ]
      },
      "GetTokenTransfersByContractRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              }
            },
            "required": [
              "contractAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/GetTokenTransfersWithinRangeRequestContent"
          }
        ]
      },
      "GetTokenTransfersByContractResponseContent": {
        "$ref": "#/components/schemas/GetTokenTransfersWithinRangeResponseContent"
      },
      "GetTokenTransfersByAccountRequestContent": {
        "allOf": [
          {
            "properties": {
              "accountAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "relation": {
                "$ref": "#/components/schemas/Relation"
              },
              "contractAddresses": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Address"
                }
              }
            },
            "required": [
              "accountAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/GetTokenTransfersWithinRangeRequestContent"
          }
        ]
      },
      "GetTokenTransfersByAccountResponseContent": {
        "$ref": "#/components/schemas/GetTokenTransfersWithinRangeResponseContent"
      },
      "GetNftContractMetadataByContractsRequestContent": {
        "type": "object",
        "properties": {
          "contractAddresses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Address"
            }
          }
        },
        "required": [
          "contractAddresses"
        ]
      },
      "GetNftContractMetadataByContractsResponseContent": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/NftContract"
        }
      },
      "SearchNftContractMetadataByKeywordRequestContent": {
        "allOf": [
          {
            "properties": {
              "keyword": {
                "type": "string",
                "example": "BAYC"
              }
            },
            "required": [
              "keyword"
            ]
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "SearchNftContractMetadataByKeywordResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/NftContract"
                }
              }
            }
          }
        ]
      },
      "GetNftMetadataByContractRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              }
            },
            "required": [
              "contractAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/NftRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetNftMetadataByContractResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/NftWithContract"
                }
              }
            }
          }
        ]
      },
      "GetNftMetadataByTokenIdsRequestContent": {
        "allOf": [
          {
            "properties": {
              "tokens": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "contractAddress": {
                      "$ref": "#/components/schemas/Address"
                    },
                    "tokenId": {
                      "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
                    }
                  },
                  "required": [
                    "contractAddress",
                    "tokenId"
                  ]
                }
              }
            },
            "required": [
              "tokens"
            ]
          },
          {
            "$ref": "#/components/schemas/NftRequestContent"
          }
        ]
      },
      "GetNftMetadataByTokenIdsResponseContent": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/NftWithContract"
        }
      },
      "GetNftContractsByAccountRequestContent": {
        "allOf": [
          {
            "properties": {
              "accountAddress": {
                "$ref": "#/components/schemas/Address"
              }
            },
            "required": [
              "accountAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetNftContractsByAccountResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/NftContractWithBalance"
                }
              }
            }
          }
        ]
      },
      "GetNftContractMetadataByContractRequestContent": {
        "type": "object",
        "properties": {
          "contractAddress": {
            "$ref": "#/components/schemas/Address"
          }
        },
        "required": [
          "contractAddress"
        ]
      },
      "GetNftContractMetadataByContractResponseContent": {
        "$ref": "#/components/schemas/NftContract"
      },
      "GetNftHoldersByContractRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              }
            },
            "required": [
              "contractAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetNftHoldersByContractResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/NftHolder"
                }
              }
            }
          }
        ]
      },
      "GetNftHoldersByTokenIdRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "tokenId": {
                "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
              }
            },
            "required": [
              "contractAddress",
              "tokenId"
            ]
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetNftHoldersByTokenIdResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/NftHolder"
                }
              }
            }
          }
        ]
      },
      "GetNftsOwnedByAccountRequestContent": {
        "allOf": [
          {
            "properties": {
              "accountAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "contractAddresses": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Address"
                }
              }
            },
            "required": [
              "accountAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/NftRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          }
        ]
      },
      "GetNftsOwnedByAccountResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/NftHolding"
                }
              }
            }
          }
        ]
      },
      "GetNftTransfersWithinRangeRequestContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/BlockRangeRequestContent"
          },
          {
            "$ref": "#/components/schemas/PageRequestContent"
          },
          {
            "$ref": "#/components/schemas/TransferRequestContent"
          },
          {
            "$ref": "#/components/schemas/NftRequestContent"
          }
        ]
      },
      "GetNftTransfersWithinRangeResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/NftTransfer"
                }
              }
            }
          }
        ]
      },
      "GetNftTransfersByContractRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              }
            },
            "required": [
              "contractAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/GetNftTransfersWithinRangeRequestContent"
          }
        ]
      },
      "GetNftTransfersByContractResponseContent": {
        "$ref": "#/components/schemas/GetNftTransfersWithinRangeResponseContent"
      },
      "GetNftTransfersByTokenIdRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "tokenId": {
                "$ref": "#/components/schemas/UnsignedDecimalIntegerString"
              }
            },
            "required": [
              "contractAddress",
              "tokenId"
            ]
          },
          {
            "$ref": "#/components/schemas/GetNftTransfersWithinRangeRequestContent"
          }
        ]
      },
      "GetNftTransfersByTokenIdResponseContent": {
        "$ref": "#/components/schemas/GetNftTransfersWithinRangeResponseContent"
      },
      "GetNftTransfersByAccountRequestContent": {
        "allOf": [
          {
            "properties": {
              "accountAddress": {
                "$ref": "#/components/schemas/Address"
              },
              "relation": {
                "$ref": "#/components/schemas/Relation"
              },
              "contractAddresses": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Address"
                }
              }
            },
            "required": [
              "accountAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/GetNftTransfersWithinRangeRequestContent"
          }
        ]
      },
      "GetNftTransfersByAccountResponseContent": {
        "$ref": "#/components/schemas/GetNftTransfersWithinRangeResponseContent"
      },
      "GetAddressByEnsNameRequestContent": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "vitalik.eth"
          }
        },
        "required": [
          "name"
        ]
      },
      "GetAddressByEnsNameResponseContent": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address"
          },
          "expiryDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "address",
          "expiryDate"
        ]
      },
      "GetEnsNameByAddressRequestContent": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address"
          }
        },
        "required": [
          "address"
        ]
      },
      "GetEnsNameByAddressResponseContent": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "vitalik.eth"
          },
          "expiryDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "name",
          "expiryDate"
        ]
      },
      "GetEnsRecordByNameRequestContent": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "vitalik.eth"
          }
        },
        "required": [
          "name"
        ]
      },
      "GetEnsRecordByNameResponseContent": {
        "$ref": "#/components/schemas/EnsRecord"
      },
      "GetEnsRecordsByAccountRequestContent": {
        "oneOf": [
          {
            "allOf": [
              {
                "properties": {
                  "ownerAddress": {
                    "$ref": "#/components/schemas/Address"
                  }
                },
                "required": [
                  "ownerAddress"
                ]
              },
              {
                "$ref": "#/components/schemas/PageRequestContent"
              }
            ]
          },
          {
            "allOf": [
              {
                "properties": {
                  "resolvedAddress": {
                    "$ref": "#/components/schemas/Address"
                  }
                },
                "required": [
                  "resolvedAddress"
                ]
              },
              {
                "$ref": "#/components/schemas/PageRequestContent"
              }
            ]
          }
        ]
      },
      "GetEnsRecordsByAccountResponseContent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PageResponseContent"
          },
          {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/EnsRecord"
                }
              }
            }
          }
        ]
      },
      "GetAccountStatsRequestContent": {
        "type": "object",
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address"
          }
        },
        "required": [
          "address"
        ]
      },
      "GetAccountStatsResponseContent": {
        "type": "object",
        "properties": {
          "transactionCounts": {
            "type": "object",
            "properties": {
              "external": {
                "$ref": "#/components/schemas/UnsignedInteger"
              },
              "internal": {
                "$ref": "#/components/schemas/UnsignedInteger"
              }
            }
          },
          "transferCounts": {
            "type": "object",
            "properties": {
              "tokens": {
                "$ref": "#/components/schemas/UnsignedInteger"
              },
              "nfts": {
                "$ref": "#/components/schemas/UnsignedInteger"
              }
            }
          },
          "assets": {
            "type": "object",
            "properties": {
              "tokens": {
                "$ref": "#/components/schemas/UnsignedInteger"
              },
              "nfts": {
                "$ref": "#/components/schemas/UnsignedInteger"
              },
              "nftContracts": {
                "$ref": "#/components/schemas/UnsignedInteger"
              }
            }
          }
        }
      },
      "GetHourlyActiveAccountsStatsRequestContent": {
        "type": "object",
        "properties": {
          "startDateTime": {
            "type": "string",
            "example": "2024-01-01-00"
          },
          "endDateTime": {
            "type": "string",
            "example": "2024-02-01-00"
          }
        },
        "required": [
          "startDateTime",
          "endDateTime"
        ]
      },
      "GetHourlyActiveAccountsStatsResponseContent": {
        "type": "object",
        "properties": {
          "count": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "date": {
                  "type": "string",
                  "example": "2024-01-01-00"
                },
                "count": {
                  "$ref": "#/components/schemas/UnsignedInteger"
                }
              },
              "required": [
                "date",
                "count"
              ]
            }
          }
        },
        "required": [
          "count",
          "items"
        ]
      },
      "GetHourlyActiveAccountsStatsByContractRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              }
            },
            "required": [
              "contractAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsRequestContent"
          }
        ]
      },
      "GetHourlyActiveAccountsStatsByContractResponseContent": {
        "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsResponseContent"
      },
      "GetDailyActiveAccountsStatsByContractRequestContent": {
        "$ref": "#/components/schemas/GetDailyTransactionsStatsByContractRequestContent"
      },
      "GetDailyActiveAccountsStatsByContractResponseContent": {
        "$ref": "#/components/schemas/GetDailyTransactionsStatsByContractResponseContent"
      },
      "GetHourlyTransactionsStatsRequestContent": {
        "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsRequestContent"
      },
      "GetHourlyTransactionsStatsResponseContent": {
        "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsResponseContent"
      },
      "GetHourlyTransactionsStatsByContractRequestContent": {
        "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsByContractRequestContent"
      },
      "GetHourlyTransactionsStatsByContractResponseContent": {
        "$ref": "#/components/schemas/GetHourlyActiveAccountsStatsByContractResponseContent"
      },
      "GetDailyTransactionsStatsRequestContent": {
        "type": "object",
        "properties": {
          "startDateTime": {
            "type": "string",
            "example": "2024-01-01T00:00:00.000Z"
          },
          "endDateTime": {
            "type": "string",
            "example": "2024-02-01T00:00:00.000Z"
          }
        },
        "required": [
          "startDateTime",
          "endDateTime"
        ]
      },
      "GetDailyTransactionsStatsResponseContent": {
        "type": "object",
        "properties": {
          "count": {
            "$ref": "#/components/schemas/UnsignedInteger"
          },
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "date": {
                  "type": "string",
                  "example": "2024-01-01T00:00:00.000Z"
                },
                "count": {
                  "$ref": "#/components/schemas/UnsignedInteger"
                }
              },
              "required": [
                "date",
                "count"
              ]
            }
          }
        },
        "required": [
          "count",
          "items"
        ]
      },
      "GetDailyTransactionsStatsByContractRequestContent": {
        "allOf": [
          {
            "properties": {
              "contractAddress": {
                "$ref": "#/components/schemas/Address"
              }
            },
            "required": [
              "contractAddress"
            ]
          },
          {
            "$ref": "#/components/schemas/GetDailyTransactionsStatsRequestContent"
          }
        ]
      },
      "GetDailyTransactionsStatsByContractResponseContent": {
        "$ref": "#/components/schemas/GetDailyTransactionsStatsResponseContent"
      }
    },
    "responses": {
      "BadRequestResponse": {
        "description": "Bad Request Response",
        "content": {
          "application/json": {
            "schema": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/ErrorResponseContent"
                },
                {
                  "properties": {
                    "code": {
                      "example": "INVALID_PARAMETER"
                    },
                    "message": {
                      "example": "Invalid parameter: { PARAMETER1_NAME = PARAMETER1_VALUE, PARAMETER2_NAME = PARAMETER2_VALUE, ... }"
                    }
                  }
                }
              ]
            }
          }
        }
      },
      "UnauthorizedResponse": {
        "description": "Unauthorized Response",
        "content": {
          "application/json": {
            "schema": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/ErrorResponseContent"
                },
                {
                  "properties": {
                    "code": {
                      "example": "AUTHENTICATION_FAILED"
                    },
                    "message": {
                      "example": "Authentication failed"
                    }
                  }
                }
              ]
            }
          }
        }
      },
      "ForbiddenResponse": {
        "description": "Forbidden Response",
        "content": {
          "application/json": {
            "schema": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/ErrorResponseContent"
                },
                {
                  "properties": {
                    "code": {
                      "example": "PERMISSION_DENIED"
                    },
                    "message": {
                      "example": "Permission denied"
                    }
                  }
                }
              ]
            }
          }
        }
      },
      "NotFoundResponse": {
        "description": "Not Found Response",
        "content": {
          "application/json": {
            "schema": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/ErrorResponseContent"
                },
                {
                  "properties": {
                    "code": {
                      "example": "RESOURCE_NOT_FOUND"
                    },
                    "message": {
                      "example": "Resource not found: { RESOURCE1_NAME = RESOURCE1_VALUE, RESOURCE2_NAME = RESOURCE2_VALUE, ... }"
                    }
                  }
                }
              ]
            }
          }
        }
      },
      "TooManyRequestsResponse": {
        "description": "Too Many Requests Response",
        "content": {
          "application/json": {
            "schema": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/ErrorResponseContent"
                },
                {
                  "properties": {
                    "code": {
                      "example": "TOO_MANY_REQUESTS"
                    },
                    "message": {
                      "example": "Too many requests"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
}
