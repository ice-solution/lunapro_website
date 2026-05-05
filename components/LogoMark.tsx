import { cdnUrl } from "@/lib/cdn";
import { LUNA_LOGO } from "@shared/const";

type LogoMarkProps = {
  /** 顯示高度；闊度會按 logo 實際比例（約 3612:900）自動計 */
  boxClassName: string;
  imgClassName?: string;
};

/**
 * `luna_logo.png` 畫布係正方形，但實際品牌圖約 3612×900 置中。
 * 用此闊窄比例 + object-cover 裁走上下留白，避免「睇落好細」。
 */
export function LogoMark({ boxClassName, imgClassName = "" }: LogoMarkProps) {
  return (
    <div
      className={`aspect-[3612/900] shrink-0 overflow-hidden rounded-sm ${boxClassName}`}
    >
      <img
        src={cdnUrl(LUNA_LOGO)}
        alt="Luna Skin"
        className={`h-full w-full object-cover object-center ${imgClassName}`}
      />
    </div>
  );
}
