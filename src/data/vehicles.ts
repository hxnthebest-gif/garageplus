export type TurkishVehicleType = 'sedan' | 'suv';

export interface VehiclePlatformConfig {
  id: TurkishVehicleType;
  name: string;
  categoryName: string;
  exampleModels: string;
  description: string;
}

export const TURKISH_VEHICLES: Record<TurkishVehicleType, VehiclePlatformConfig> = {
  sedan: {
    id: 'sedan',
    name: 'SEDAN / COUPE',
    categoryName: 'Sedan & Coupe Karoser',
    exampleModels: 'BMW 3/5 Serisi, Mercedes C/E Serisi, Porsche 911 / Taycan vb.',
    description: 'Standart sedan, coupe ve spor otomobil gövde oranlarına uygun milimetrik şablonlar.'
  },
  suv: {
    id: 'suv',
    name: 'SUV / HATCHBACK',
    categoryName: 'SUV & Crossover Karoser',
    exampleModels: 'Porsche Cayenne / Macan, BMW X5 / X3, Range Rover, Togg T10X vb.',
    description: 'Yüksek gövde ve geniş yüzey alanına sahip SUV ve Crossover araçlar için özel kesim.'
  }
};
