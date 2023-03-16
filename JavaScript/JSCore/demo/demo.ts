function toHex(this: number) {
    return this.toString(16);
}

type test = OmitThisParameter<typeof toHex>