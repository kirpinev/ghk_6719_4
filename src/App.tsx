import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import image1 from "./assets/1.png";
import setting from "./assets/Настройка.png";
import nothing from "./assets/Никаких неловких моментов.png";
import save from "./assets/Экономьте часы.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { ThxLayout } from "./thx/ThxLayout.tsx";
import { useState } from "react";
import { LockOpenLineMIcon } from "@alfalab/icons-glyph/LockOpenLineMIcon";

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    window.gtag("event", "6719_get_sub", {
      variant_name: "6719_4",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img
          src={image1}
          alt="Картинка Альфа-Смарт"
          style={{ borderRadius: "16px" }}
        />

        <Gap size={16} />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Typography.Title tag="h1" view="small">
            На карте снова нет денег?
          </Typography.Title>
        </div>

        <Gap size={16} />

        <Typography.Text>
          За 3 минуты освойте навык, который поможет всегда быть при деньгах: на
          кассе в магазине, во время шоппинга и такси. Неловких ситуаций с
          оплатой станет меньше, а вы сэкономите минуты и даже часы на
          постоянных переводах себе из других банков.
        </Typography.Text>

        <Gap size={16} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            backgroundColor: "#F8F8F8",
            padding: "16px 24px",
            borderRadius: "16px",
          }}
        >
          <LockOpenLineMIcon />
          <Typography.Text view="primary-small">
            Ваш новый навык — автоплатежи
          </Typography.Text>
        </div>

        <Gap size={40} />

        <Typography.Title tag="h1" view="xsmall">
          Ключевые преимущества
        </Typography.Title>

        <Gap size={16} />

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img src={save} alt="" width={48} height={48} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small" weight="bold">
              Экономьте часы
            </Typography.Text>
            <Typography.Text view="primary-small">
              Больше не нужно переводить вручную
            </Typography.Text>
          </div>
        </div>
        <Gap size={12} />
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img src={nothing} alt="" width={48} height={48} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small" weight="bold">
              Никаких неловких моментов
            </Typography.Text>
            <Typography.Text view="primary-small">
              Деньги приходят тогда, когда нужно
            </Typography.Text>
          </div>
        </div>
        <Gap size={12} />
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <img src={setting} alt="" width={48} height={48} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small" weight="bold">
              Настройка за 1 минуту
            </Typography.Text>
            <Typography.Text view="primary-small">
              Можно отключить в любой момент
            </Typography.Text>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={submit}>
          Закрепить скил
        </ButtonMobile>
      </div>
    </>
  );
};
