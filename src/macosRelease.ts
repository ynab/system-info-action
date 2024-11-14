const os = require("os");

const nameMap = new Map([
  [23, ["Sequoia", "15"]],
  [23, ["Sonoma", "14"]],
  [22, ["Ventura", "13"]],
  [21, ["Monterey", "12"]],
  [20, ["Big Sur", "11"]],
  [19, ["Catalina", "10.15"]],
  [18, ["Mojave", "10.14"]],
  [17, ["High Sierra", "10.13"]],
  [16, ["Sierra", "10.12"]],
  [15, ["El Capitan", "10.11"]],
  [14, ["Yosemite", "10.10"]],
  [13, ["Mavericks", "10.9"]],
  [12, ["Mountain Lion", "10.8"]],
  [11, ["Lion", "10.7"]],
  [10, ["Snow Leopard", "10.6"]],
  [9, ["Leopard", "10.5"]],
  [8, ["Tiger", "10.4"]],
  [7, ["Panther", "10.3"]],
  [6, ["Jaguar", "10.2"]],
  [5, ["Puma", "10.1"]],
]);

const macosRelease = () => {
  const release = Number(os.release().split(".")[0]);

  const mappedRelease = nameMap.get(release);

  if (mappedRelease) {
    const [name, version] = mappedRelease;
    return {
      name,
      version,
    };
  } else {
    throw new Error(`Unknown macOS release: ${release}`);
  }
};

export default macosRelease;
