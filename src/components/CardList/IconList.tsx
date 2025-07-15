interface Props {
  platform: { id: number; name: string; slug: string };
}

type icon = {
  [key: string]: string;
};

const IconList = ({ platform }: Props) => {
  const IconMap: icon = {
    xbox: "fa-xbox",
    pc: "fa-desktop",
    mac: "fa-apple",
    android: "fa-android",
    playstation: "fa-playstation",
    linux: "fa-linux",
    web: "fa-web-awesome",
    ios: "fa-app-store-ios",
  };

  return (
    <>
      <i className={`fa-brands  ${IconMap[platform.slug]}`}></i>
    </>
  );
};

export default IconList;
