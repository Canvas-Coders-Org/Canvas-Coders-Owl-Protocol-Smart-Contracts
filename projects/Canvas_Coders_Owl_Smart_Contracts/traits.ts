import {NFTGenerativeTraitImage, NFTGenerativeTraitEnum, NFTGenerativeTraitNumber} from '@owlprotocol/nft-sdk';

export const attrMemberIdNumber: NFTGenerativeTraitNumber = {
    name: 'Canvas Coders Member ID',
    type: 'number',
    description: `Owner's membership ID`,
    min: 1000000,
    max: 99999999999,
    abi: 'uint48',
};

export const attrTierEnum: NFTGenerativeTraitEnum = {
    name: 'Status Tier',
    type: 'enum',
    description: 'Status tier in the loyalty program, can be one of: Tech Tyro, Hustling Hacker Tech Titan, Dabbling Doodler, Paint Posse or Masterpiece Maker',
    options: ['Tech Tyro', 'Hustling Hacker', 'Tech Titan', 'Dabbling Doodler', 'Paint Posse', 'Masterpiece Maker'],
};

export const attrTierBgImage: NFTGenerativeTraitImage = {
    name: 'Background',
    type: 'image',
    image_type: 'png',
    options: [
        {
            value: 'Basic',
            image_url: 'https://ipfs.io/ipfs/QmUn7Yw7M93PRtnzwh8tusyyxUqFjv88xNXCGAxTnLArYD/Background_GIF_Canvas_Coders.gif',
        },
        {
            value: 'Facets',
            image_url: 'https://ipfs.io/ipfs/QmUn7Yw7M93PRtnzwh8tusyyxUqFjv88xNXCGAxTnLArYD/Background_GIF_Canvas_Coders.gif',
        },
        {
            value: 'Dark',
            image_url: 'https://ipfs.io/ipfs/QmUn7Yw7M93PRtnzwh8tusyyxUqFjv88xNXCGAxTnLArYD/Background_GIF_Canvas_Coders.gif',
        },
    ],
};

export const attrTierIconImage: NFTGenerativeTraitImage = {
    name: 'Tier Badge',
    type: 'image',
    image_type: 'png',
    options: [
        {
            value: 'Tech Tyro',
            image_url: 'https://ipfs.io/ipfs/QmYhASRKCjRJsN77yAURAerY2rDqba6et8BWtL2oshGThn?filename=Baby_Dev.png',
        },
        {
            value: 'Hustling Hacker',
            image_url: 'https://ipfs.io/ipfs/QmaU3X4B3WU9RnobknPpRKVQ6ZgabfRTQ7LDQHQjCNhUMY?filename=Hustling_Hacker_Dev.png',
        },
        {
            value: 'Tech Titan',
            image_url: 'https://ipfs.io/ipfs/QmbLhYCQCnDwZpePenL2jBjv9chCTowx5yhHk919BLrMAt?filename=Einstein_Tech_Titan.png',
        },
        {
            value: 'Dabbling Doodler',
            image_url: 'https://ipfs.io/ipfs/QmaVfEBHdxLvKxi5iREjoHSgG2C4jYDjrfz4WViruQGqzE?filename=Baby_Artist.png',
        },
        {
            value: 'Paint Posse',
            image_url: 'https://ipfs.io/ipfs/QmTSMoF5jNWrRu6sthZ38dwDQJkWFsJ9CcB8N7ceJyFrjx?filename=artist.png',
        },
        {
            value: 'Masterpiece Maker',
            image_url: 'https://ipfs.io/ipfs/QmWWoWAeJWHarLjRei2RN9Ema1uSAHxzgUpDX9KKzw74UM?filename=Art_Master.png',
        },
    ],
};

export const attrPointsNumber: NFTGenerativeTraitNumber = {
    name: 'Points',
    type: 'number',
    description: 'Points collected from participation',
    min: 0,
    max: 16777215,
    abi: 'uint24',
};

export const attrSubGroupEnum: NFTGenerativeTraitEnum = {
    name: 'Sub Group',
    type: 'enum',
    description: 'The special subgroup the user is part of, if any',
    options: ['None', 'Project 1', 'Project 2', 'Project 3'],
    abi: 'uint16', // overrides the 'uint8' default
};