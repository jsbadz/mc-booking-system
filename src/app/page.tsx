import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function Home() {
  const { Meta } = Card;

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-200 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full max-w-screen-xl">
        {[...Array(8)].map((_, i) => (
          <Card
            key={i}
            className="w-full"
            cover={
              <img
                draggable={false}
                alt="example"
                src="/image/carlo.jpg"
                className="w-full h-48 object-cover object-top"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <span>Yamaha NMAX (Tech Max)</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
