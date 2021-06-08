const generateKey = (pre: string) => `${pre}_${new Date().getTime()}`;

export default generateKey;
