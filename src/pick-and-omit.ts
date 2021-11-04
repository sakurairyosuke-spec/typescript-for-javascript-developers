export {};

type DetaileProfile = {
    name: string;
    height: number;
    weight: number;
};

type SimpleProfile = Pick<DetaileProfile, 'name' | 'weight' | 'height'>;
type SmallProfile = Omit<DetaileProfile, 'height'>;

type MyOmit = Pick<DetaileProfile,Exclude<'name' | 'weight' | 'height', 'height'>>;
type MySmallProfile = MyOmit;