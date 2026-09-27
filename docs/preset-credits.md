# プリセットの掲載回路・クレジット照合記録

確認日：2026-09-27。対象は[ISHI会の一覧](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1)の見出しからリンクされた37個のMPWです。
一覧の冒頭には「38枠」とありますが、公開されたMPW見出し・リポジトリは37件です。

一覧ページだけでなく、各リポジトリのREADME、docs/info.md、info.yaml、ファイル一覧と、公開GDSのトップセルおよび下位セルを照合しました。
ハンズオンの案内・開催団体の名前を、そのチップに実際に載る回路・参加者と混同しないようにしています。
下表の名前は公開資料の表記を保持しています。別名と思われるものも勝手に同一人物にまとめていません。

## 記載が食い違う／名前が公開されていない箇所

- **SiCA 08**：READMEとdocs/info.mdはHaruto_Tanakaと書き、存在しない1bitCPUファイルへリンクしています。実際の提出GDSのトップセル参照は`1bitCPU_Kanta_Fukuda`です。ビューアではKanta_Fukudaを掲載し、MPWリポジトリへリンクします。SiCA 07のHaruto_Tanakaとは分けています。
- **OpenSUSI 05**：搭載回路はREADMEに記載された3zkiの計装アンプとPenguinEinoのVGAのみ。GDSに残る `opamp_r2r_saito` と配下59セルには図形がなく、搭載回路として数えない。以前のセル名だけに基づくDaisukeSaitoの追加は誤りだったため削除（2026-09-27）。
- **KOSEN 04 / Qdai 04**：README前半の1bit-CPUハンズオンは開催背景です。実際のGDSにはCPUセルがなく、KOSEN 04はRFミキサー一式、Qdai 04はTiny555と4bit SRAMです。以前の「1bit-CPU」を削除しました。
- **サンケン電気枠**：READMEはテンプレートのままです。一覧の5名に加え、GDSとSPICEの名前付きセル`fujii_inverter`、`kamiyama_inverter`、`kamiyama_Driver`、`kawamoto_inverter`、`shishido_opamp_v12`を掲載しました。fujii等はセル名の表記であり、フルネームを推定していません。`mmOPAMP`・`mmBIAS`、回路選択用アナログスイッチ・デコーダも載せていますが、作者名は資料にないため割り当てていません。info.yamlにはTakanaga Yamazakiとありますが、回路との対応が明記されていないため画面には掲載しません。一覧のexdojpは、提出ファイルの`inverter_exodjp`およびディレクトリ名に合わせてexodjpに直しました。
- **ZEP**：一覧にないkato・sasaki・kudoを、各inverterディレクトリと提出GDS（`inverter_kato1`・`inverter_ssk`・`inverter_kudo`）から追加。巨大インバータとリングVCOは回路として追加しましたが、作者名が明記されていないため個人名は割り当てていません。
- **京都府立工業高校**：公開されているチームAK・HK・KM・MRを全て掲載。個々の生徒の名前は公開リポジトリに記載がないため、チーム名を使います。
- **AMラジオ**：[公開メンバーロゴ](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/member_project/AM_Radio/Yamada3/image/AMRadioMember.png)の7名を全て掲載。OpenSUSI 03に搭載されているのはnoritsunaの究極のレイアウト版なので、画面上はnoritsunaだけを掲載します。
- **DCDC**：一覧のDCDCというディレクトリ名を人名扱いしていたため、公開された実プロジェクトディレクトリ`DCDC/ShuntaroOHNO`に訂正しました。

以下は公開資料で確認できる範囲の全掲載クレジットです。公開されていないチーム内の個人名や、匿名セルの実作者まで網羅したと断定するものではありません。

参照元にある`RASE-A`は実在する`RISE-A`へ、`I2C/ohono`は`I2C/ShuntaroOHNO`へ修正しました。元リンク先の個別フォルダが公開されていないICHIKEN 04の3名とSiCA 01のkubotakeshiは、掲載を確認できる各MPWのREADMEへリンクしています。

## 各MPWの照合結果

### ISHI-KAI 01

- JJY Receiver：Masahiro
- BGR：Maehashi

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_01/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_01/main/src/tr_1um_ishikai01.gds) — SHA-256: `74c6bbc2d2832d7ebea8f053331b6d996b5be9ee6fb5c45bbb1ad78b056fcdc2`

### ISHI-KAI 02

- AM Receiver：Yamada3, Maehashi, Munetomo, reodon, Sadakata, tk, Yutaka KOTANI
- DCDC Converter：ShuntaroOHNO

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_02/blob/main/README.md)
- [資料 3](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/member_project/AM_Radio/Yamada3/image/AMRadioMember.png)
- [資料 4](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/DCDC/ShuntaroOHNO)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_02/main/src/tr_1um_ishikai02.gds) — SHA-256: `b62112564b461c9e7fa6a219c52d4679754dda05d078fac15b0f7e1271bce173`

### サンケン電気枠

- インバータ回路：fujii, kawamoto, exodjp, july_fifth, kubotakeshi, pankani, yasushitech
- インバータ回路 / Driver：kamiyama
- OPAMP回路：shishido
- OPAMP / バイアス（mmOPAMP・mmBIAS）（個人名の記載なし）
- 回路選択用アナログスイッチ / デコーダ（個人名の記載なし）

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/README.md)
- [資料 3](https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.cir)
- [資料 4](https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/info.yaml)
- [提出GDS](https://raw.githubusercontent.com/munetomo-maruyama/TR-1um_MPW_Sanken/main/src/tr_1um_sanken.gds) — SHA-256: `c8fdf68f5c8fe8278cba3f1e931d64c6f6ae864d2f482405d60f16b4c9ac766f`

### ICHIKEN&RISE-A 01

- 1bit-CPU回路：SatoshiSasaki
- インバータ回路：yumu19, soraoto06, Miyamoto_sprzk_naoyuki

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_01/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_01/main/src/tr_1um_ichiken01.gds) — SHA-256: `d4a2138b5f6361481790890cb52de5e71f17b5e552232c18b64ee10012c51711`

### ICHIKEN&RISE-A 02

- 1bit-CPU回路：2223310
- インバータ回路：Luft256, shkoga, TadasukeKuramochi

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_02/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_02/main/src/tr_1um_ichiken02.gds) — SHA-256: `f6e6d1cf4814dfb0a16e80706f7d8bdcfe539c2f7b497a8b8ea859c5fe2e9b66`

### ICHIKEN&RISE-A 03

- 1bit-CPU回路：TakenMaker
- インバータ回路：ANT_taro, jog

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_03/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_03/main/src/tr_1um_ichiken03.gds) — SHA-256: `28fb401b9e54fd39e7509023663952d5ec8d10406ecc56c4e956a8e0b6e72252`

### ICHIKEN&RISE-A 04

- 1bit-CPU回路：Yamaoka
- インバータ回路：EinosukeOkazaki, NanTarou, RS_232_C

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/main/src/tr_1um_ichiken04.gds) — SHA-256: `6a04a2ba9b75e9dc7530c8b4033976f7ae02d2fcc839a688436ed8ffac3f287a`

### ICHIKEN&RISE-A 05

- 1bit-CPU回路：Miyazaki
- I2C回路：ohno

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_05/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_05/main/src/tr_1um_ichiken05.gds) — SHA-256: `4963daf1dba01a71220bfc9c67a192d488b8e9824bae094e483e0b97de1105cd`

### ICHIKEN&RISE-A 06

- 1bit-CPU回路：Isobe
- オーディオ用OPAMP回路：ichiken

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_06/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_06/main/src/tr_1um_ichiken06.gds) — SHA-256: `51fd962f5564ca2ee73d5bb0911fed4a6f55ab56b64a7dd9e703c742d01cb2d4`

### KOSEN 04

- RFミキサー（RF / LOバルーン・パッシブミキサー・差動IFアンプ）：noritsuna

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Kosen04/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Kosen04/main/src/tr_1um_Kosen04.gds) — SHA-256: `ae3fc64fd0f6252c6c93a7c05f92872d9a2fe47dc02b16216ec7bf274673fb5d`

### 京都府立工業高校 01

- オーディオ用OPAMP回路：チームAK, チームHK, yamazaki

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01/main/src/tr_1um_kyoto_ths_01.gds) — SHA-256: `056c78aebdb3a87f4f76068504792c7aa323211fce556c50fa6cbb535b443e45`

### 京都府立工業高校 02

- オーディオ用OPAMP回路：チームKM, チームMR, KabechiFC

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02/main/src/tr_1um_kyoto_ths_02.gds) — SHA-256: `a0cd29896ef8eb5b04b8f6c1eeb374e923624a7c08910092e5aa208caef33d54`

### Qdai 04

- Tiny555回路：yamada3
- 4bit 6T SRAM回路：noritsuna

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Qdai_04/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Qdai_04/main/src/tr_1um_Qdai04.gds) — SHA-256: `7dc9993a11def881c2d728ea2722818798602d61956c23931a8abc049ec888e0`

### SiCA 01

- 1bit-CPU回路：Ko_Choen, kubotakeshi

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01/main/src/tr_1um_SiCA01.gds) — SHA-256: `e72c2fd88197ba8825dad72682f04c8f3ddc371b228ef1311f08bd1bb67db5a3`

### SiCA 02

- 1bit-CPU回路：Fukushima_Ayato
- オーディオ用OPAMP回路：zawa

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_02/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_02/main/src/tr_1um_SiCA02.gds) — SHA-256: `21caf7f53acf930bd66945aeabbda38573635d587be016371052c4dbf692f7a6`

### SiCA 03

- 1bit-CPU回路：ryosuke_takagai
- OPAMP回路：cat_nekonekone

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_03/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_03/main/src/tr_1um_SiCA03.gds) — SHA-256: `5657b80b210d87c7017e02da33283df3ddb31cda441a8ca4b333a0b7f198c3da`

### SiCA 04

- 1bit-CPU回路：suzuki_go
- OPAMP回路：houta

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_04/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_04/main/src/tr_1um_SiCA04.gds) — SHA-256: `a4a34eeeefaa4f3701b1483585701c5085303042e5e9d289f26e1c52350b542b`

### SiCA 05

- 1bit-CPU回路：Suzuki_Naotaro
- OPAMP回路：yamada

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_05/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_05/main/src/tr_1um_SiCA05.gds) — SHA-256: `f59fec1d2e6e70c112a25ef1881ea98e5c97cd577d4844d3903f16feac6fa3fe`

### SiCA 06

- 1bit-CPU回路：tsukagoshi_tomonobu
- OPAMP回路：makoto645

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_06/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_06/main/src/tr_1um_SiCA06.gds) — SHA-256: `0984f47744a5b6d0a6d66e5a7e0b67f228bba7ec511b49488bcd2353c24656b2`

### SiCA 07

- 1bit-CPU回路：Haruto_Tanaka
- OPAMP回路：kubotakeshi

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_07/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_07/main/src/tr_1um_SiCA07.gds) — SHA-256: `6230b829c2549f3ed62f908c6ed96dae409d9de5d97d1e90094f56fc438841c0`

### SiCA 08

- 1bit-CPU回路：Kanta_Fukuda
- OPAMP回路：july_fifth

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08/blob/main/README.md)
- [資料 3](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08/blob/main/src/tr_1um_SiCA08.gds)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08/main/src/tr_1um_SiCA08.gds) — SHA-256: `13b3f9173ef89d50c766a0651268ee559a0b66d2d78dd48dd85e3e3bc1ba55f5`

### SiCA 10

- 1bit-CPU回路：SotaTakagi
- SRAM回路：PenguinEino

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_10/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_10/main/src/tr_1um_SiCA10.gds) — SHA-256: `4bae65052113d5993c120d4833187d38f4178d6a4789339a788594f396ede0c9`

### ZEP

- インバータ回路：kato, sasaki, kudo, tarry, yanzm, Yourein, cat_nekonekone, makoto645
- 巨大インバータ回路（個人名の記載なし）
- リングオシレータ型VCO（個人名の記載なし）

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/blob/main/README.md)
- [資料 3](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/inverter)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/main/src/tr_1um_ZEP.gds) — SHA-256: `ca3bc30561826aa141e70e6440409fbfb73c815c49cbd484267715fc0bf57260`

### AUDIO OPAMP 01

- オーディオ用OPAMP回路：Noriko_Miyazaki, TOSHIO_NAKAMURA
- OPAMP回路：zawa

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01/main/src/tr_1um_AUDIO_OPAMP01.gds) — SHA-256: `7961c5b42ff26fe1e48ac68209138db295d34a65a4b544b6c444347add1d431c`

### AUDIO OPAMP 02

- オーディオ用OPAMP回路：ASAKO_IWAI, tomoaki_mori
- OPAMP回路：sable

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02/main/src/tr_1um_AUDIO_OPAMP02.gds) — SHA-256: `12b36898ec752b086451b515f388d2227cb2e6f146f993022c186523cc213664`

### AUDIO OPAMP 03

- オーディオ用OPAMP回路：AyatoFukushima, YutoSasaki
- SRAM回路：ytr0

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03/main/src/tr_1um_AUDIO_OPAMP03.gds) — SHA-256: `277dd764d32c7852262340f809371b81c8408d19ff47bbc77c5200dddbc3ef5c`

### AUDIO OPAMP 04

- オーディオ用OPAMP回路：ChihiroNishimura
- 555タイマー回路：makoto645
- Clock Divider回路：ShuntaroOHNO

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP04/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP04/main/src/tr_1um_AUDIO_OPAMP04.gds) — SHA-256: `82382c40ff4ef1d55d0ae428412791149dfc722a5908414f791989b89d0fe298`

### AUDIO OPAMP 05

- オーディオ用OPAMP回路：HijiriMatsuura
- インバータ回路：0x837c, 7158918, eycjur, jijinbei

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP05/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP05/main/src/tr_1um_AUDIO_OPAMP05.gds) — SHA-256: `eceff583191851eaa872d85368324d19181fc21338ea1d732e961b5a4e7e1d24`

### AUDIO OPAMP 06

- オーディオ用OPAMP回路：MiyabiYoshino
- インバータ回路：makoto_5555, sai1231s, Talkie_junk, WEI_YICHENG

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP06/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP06/main/src/tr_1um_AUDIO_OPAMP06.gds) — SHA-256: `7966fccc68cae412f6d3b90a84afdb2d9cf62fdcf99dac2ed6f4b519a71d584f`

### AUDIO OPAMP 07

- オーディオ用OPAMP回路：MizukiItou
- 平衡3値論理回路：PenguinEino

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP07/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP07/main/src/tr_1um_AUDIO_OPAMP07.gds) — SHA-256: `6e2d83f377d7e3cb0035548329caf1211ad1581b09ea1e809f33c944033bf9d5`

### AUDIO OPAMP 08

- オーディオ用OPAMP回路：ikeay
- LPF回路：noritsuna

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP08/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP08/main/src/tr_1um_AUDIO_OPAMP08.gds) — SHA-256: `fcb0cc31d4dcf5ffebb464a7c81222117421ca8f5e8c4066a3b77c313bc859fa`

### AUDIO OPAMP 09

- オーディオ用OPAMP回路：DaisukeSaito
- オーディオ用OPAMP回路x2：3zki

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09/main/src/tr_1um_AUDIO_OPAMP09.gds) — SHA-256: `4d24053e29ec65de27c9724d0d3162ce6b14b473112f40d3f07901fe1a6cf83c`

### OpenSUSI 01

- PMOS / NMOS TEG：木野先生（九州大学）

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI01/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI01/main/src/tr_1um_OpenSUSI01.gds) — SHA-256: `dc0c11b045ecaa6704755a75f2380bd7d810bcdf9bd4d594b2d54b7902dd43b2`

### OpenSUSI 02

- CMOSイメージセンサー：YuMaehashi
- インバータ回路：makoto56

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI02/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI02/main/src/tr_1um_OpenSUSI02.gds) — SHA-256: `2005db9e8251eeb4758029cf9fdb517802e0530431aee5c32c7a4c7a8b6aeb95`

### OpenSUSI 03

- AMラジオ（究極のレイアウト版）：noritsuna

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI03/blob/main/README.md)
- [資料 3](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/member_project/AM_Radio/Yamada3/image/AMRadioMember.png)
- [資料 4](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/member_project/AM_Radio/Yamada3/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI03/main/src/tr_1um_OpenSUSI03.gds) — SHA-256: `fa1047aa171984d5ed2e109b9c0b29ad10aa7ae912f80bbdc3d2bc77ffb33518`

### OpenSUSI 04

- 半導体計測用アドレスデコーダ・マルチプレクサ：ShuntaroOHNO

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI04/blob/main/README.md)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI04/main/src/tr_1um_OpenSUSI04.gds) — SHA-256: `b3bab58e7986708d975650874cfdec738d5831536ceb8b4e8e3f4d0742c2d239`

### OpenSUSI 05

- 計装アンプ：3zki
- RGB121 VGA出力回路：PenguinEino

照合元：

- [資料 1](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md)
- [資料 2](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI05/blob/main/README.md)
- [資料 3](https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI05/blob/main/src/tr_1um_OpenSUSI05.gds)
- [提出GDS](https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI05/main/src/tr_1um_OpenSUSI05.gds) — SHA-256: `042b31fe3a9358d11799a2a44a441c47559a53669a4c4f66bedd832c06d4fec2`


## 回路フォーカス

各掲載回路の`cells`を、37件の提出GDSのトップセルから辿れるセルと照合しました。回路の欄はMPWを開いて該当セルを選択・拡大し、右の外部リンクは個人フォルダ（なければMPWリポジトリ）を開きます。1bitCPUのように個人別ファイルだけが共通フォルダに置かれている場合も、MPWリポジトリへリンクします。

階層内のセルを名前の完全一致で探索します。複数セルから構成される回路は、それらの表示上の境界をまとめて拡大します。GDS更新でセルがなくなった場合は別回路へ誤って移動せず、見つからなかった名前を表示します。
