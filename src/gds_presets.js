// Whole-chip catalog audited against the project index, each MPW repository and submitted GDS.
// Checked 2026-09-27; see docs/preset-credits.md for sources and conflicting source records.
// External images and designs remain owned by their respective authors.
export const GDS_PRESETS = [
  {
    name: 'ISHI-KAI 01',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_01/main/src/tr_1um_ishikai01.gds',
    repository: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_01',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_01/main/images/all_frame.png',
    members: [
      {
        name: 'Masahiro',
        design: 'JJY Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/JJY_Receiver/Masahiro',
      },
      {
        name: 'Maehashi',
        design: 'BGR',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/BGR/Maehashi',
      },
    ],
    description: 'JJY Receiver / BGR',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_01/blob/main/README.md',
    ],
  },
  {
    name: 'ISHI-KAI 02',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_02/main/src/tr_1um_ishikai02.gds',
    repository: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_02',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_02/main/images/all_frame.png',
    members: [
      {
        name: 'Yamada3',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'Maehashi',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'Munetomo',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'reodon',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'Sadakata',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'tk',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'Yutaka KOTANI',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'ShuntaroOHNO',
        design: 'DCDC Converter',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/DCDC/ShuntaroOHNO',
      },
    ],
    description: 'AM Receiver / DCDC Converter',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_02/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/member_project/AM_Radio/Yamada3/image/AMRadioMember.png',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/DCDC/ShuntaroOHNO',
    ],
  },
  {
    name: 'サンケン電気枠',
    url: 'https://raw.githubusercontent.com/munetomo-maruyama/TR-1um_MPW_Sanken/main/src/tr_1um_sanken.gds',
    repository: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview: 'previews/sanken.png',
    members: [
      {
        name: 'fujii',
        design: 'インバータ回路',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.cir',
        note: 'GDS cell name',
      },
      {
        name: 'kamiyama',
        design: 'インバータ回路 / Driver',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.cir',
        note: 'GDS cell name',
      },
      {
        name: 'kawamoto',
        design: 'インバータ回路',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.cir',
        note: 'GDS cell name',
      },
      {
        name: 'shishido',
        design: 'OPAMP回路',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.cir',
        note: 'GDS cell name',
      },
      {
        name: 'exodjp',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/exodjp',
      },
      {
        name: 'july_fifth',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/july_fifth',
      },
      {
        name: 'kubotakeshi',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/kubotakeshi',
      },
      {
        name: 'pankani',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/pankani',
      },
      {
        name: 'yasushitech',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/yasushitech',
      },
    ],
    description:
      'インバータ回路 / インバータ回路 / Driver / OPAMP回路 / OPAMP / バイアス（mmOPAMP・mmBIAS） / 回路選択用アナログスイッチ / デコーダ',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/README.md',
      'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.cir',
      'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/info.yaml',
    ],
    additionalCircuits: [
      {
        design: 'OPAMP / バイアス（mmOPAMP・mmBIAS）',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.cir',
      },
      {
        design: '回路選択用アナログスイッチ / デコーダ',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.cir',
      },
    ],
    projectCredits: [
      {
        name: 'Takanaga Yamazaki',
        design: 'Project author (info.yaml)',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/info.yaml',
      },
    ],
  },
  {
    name: 'ICHIKEN&RISE-A 01',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_01/main/src/tr_1um_ichiken01.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_01',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_01/main/images/all_frame.png',
    members: [
      {
        name: 'SatoshiSasaki',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_01/blob/main/1bitCPU/1bitCPU_SatoshiSasaki.gds',
      },
      {
        name: 'yumu19',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/yumu19',
      },
      {
        name: 'soraoto06',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/soraoto06',
      },
      {
        name: 'Miyamoto_sprzk_naoyuki',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/Miyamoto_sprzk_naoyuki',
      },
    ],
    description: '1bit-CPU回路 / インバータ回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_01/blob/main/README.md',
    ],
  },
  {
    name: 'ICHIKEN&RISE-A 02',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_02/main/src/tr_1um_ichiken02.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_02',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_02/main/images/all_frame.png',
    members: [
      {
        name: '2223310',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_02/blob/main/1bitCPU/1bitCPU_2223310.gds',
      },
      {
        name: 'Luft256',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/Luft256',
      },
      {
        name: 'shkoga',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/shkoga',
      },
      {
        name: 'TadasukeKuramochi',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/TadasukeKuramochi',
      },
    ],
    description: '1bit-CPU回路 / インバータ回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_02/blob/main/README.md',
    ],
  },
  {
    name: 'ICHIKEN&RISE-A 03',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_03/main/src/tr_1um_ichiken03.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_03',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_03/main/images/all_frame.png',
    members: [
      {
        name: 'TakenMaker',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_03/blob/main/1bitCPU/1bitCPU_TakenMaker.gds',
      },
      {
        name: 'ANT_taro',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/ANT_taro',
      },
      {
        name: 'jog',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/jog',
      },
    ],
    description: '1bit-CPU回路 / インバータ回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_03/blob/main/README.md',
    ],
  },
  {
    name: 'ICHIKEN&RISE-A 04',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/main/src/tr_1um_ichiken04.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/main/images/all_frame.png',
    members: [
      {
        name: 'Yamaoka',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/blob/main/1bitCPU/1bitCPU_Yamaoka.gds',
      },
      {
        name: 'EinosukeOkazaki',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/blob/main/README.md',
      },
      {
        name: 'NanTarou',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/blob/main/README.md',
      },
      {
        name: 'RS_232_C',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/blob/main/README.md',
      },
    ],
    description: '1bit-CPU回路 / インバータ回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04/blob/main/README.md',
    ],
  },
  {
    name: 'ICHIKEN&RISE-A 05',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_05/main/src/tr_1um_ichiken05.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_05',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_05/main/images/all_frame.png',
    members: [
      {
        name: 'Miyazaki',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_05/blob/main/1bitCPU/1bitCPU_Miyazaki.gds',
      },
      {
        name: 'ohno',
        design: 'I2C回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/I2C/ShuntaroOHNO',
      },
    ],
    description: '1bit-CPU回路 / I2C回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_05/blob/main/README.md',
    ],
  },
  {
    name: 'ICHIKEN&RISE-A 06',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_06/main/src/tr_1um_ichiken06.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_06',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_06/main/images/all_frame.png',
    members: [
      {
        name: 'Isobe',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_06/blob/main/1bitCPU/1bitCPU_Isobe.gds',
      },
      {
        name: 'ichiken',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/ichiken',
      },
    ],
    description: '1bit-CPU回路 / オーディオ用OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_06/blob/main/README.md',
    ],
  },
  {
    name: 'KOSEN 04',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Kosen04/main/src/tr_1um_Kosen04.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Kosen04',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Kosen04/main/images/all_frame.png',
    members: [
      {
        name: 'noritsuna',
        design: 'RFミキサー（RF / LOバルーン・パッシブミキサー・差動IFアンプ）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/MIXER/noritsuna',
      },
    ],
    description: 'RFミキサー（RF / LOバルーン・パッシブミキサー・差動IFアンプ）',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Kosen04/blob/main/README.md',
    ],
  },
  {
    name: '京都府立工業高校 01',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01/main/src/tr_1um_kyoto_ths_01.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01/main/images/all_frame.png',
    members: [
      {
        name: 'チームAK',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01/tree/main/member_project/AK',
      },
      {
        name: 'チームHK',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01/tree/main/member_project/HK',
      },
      {
        name: 'yamazaki',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/yamazaki',
      },
    ],
    description: 'オーディオ用OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01/blob/main/README.md',
    ],
  },
  {
    name: '京都府立工業高校 02',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02/main/src/tr_1um_kyoto_ths_02.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02/main/images/all_frame.png',
    members: [
      {
        name: 'チームKM',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02/tree/main/member_project/KM',
      },
      {
        name: 'チームMR',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02/tree/main/member_project/MR',
      },
      {
        name: 'KabechiFC',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/KabechiFC',
      },
    ],
    description: 'オーディオ用OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02/blob/main/README.md',
    ],
  },
  {
    name: 'Qdai 04',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Qdai_04/main/src/tr_1um_Qdai04.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Qdai_04',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Qdai_04/main/images/all_frame.png',
    members: [
      {
        name: 'yamada3',
        design: 'Tiny555回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/Tiny555/yamada3',
      },
      {
        name: 'noritsuna',
        design: '4bit 6T SRAM回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/SRAM/noritsuna',
      },
    ],
    description: 'Tiny555回路 / 4bit 6T SRAM回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_Qdai_04/blob/main/README.md',
    ],
  },
  {
    name: 'SiCA 01',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01/main/src/tr_1um_SiCA01.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01/main/images/all_frame.png',
    members: [
      {
        name: 'Ko_Choen',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01/blob/main/1bitCPU/1bitCPU_Ko_Choen.gds',
      },
      {
        name: 'kubotakeshi',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01/blob/main/README.md',
      },
    ],
    description: '1bit-CPU回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01/blob/main/README.md',
    ],
  },
  {
    name: 'SiCA 02',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_02/main/src/tr_1um_SiCA02.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_02',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_02/main/images/all_frame.png',
    members: [
      {
        name: 'Fukushima_Ayato',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_02/blob/main/1bitCPU/1bitCPU_Fukushima_Ayato.gds',
      },
      {
        name: 'zawa',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/zawa',
      },
    ],
    description: '1bit-CPU回路 / オーディオ用OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_02/blob/main/README.md',
    ],
  },
  {
    name: 'SiCA 03',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_03/main/src/tr_1um_SiCA03.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_03',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_03/main/images/all_frame.png',
    members: [
      {
        name: 'ryosuke_takagai',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_03/blob/main/1bitCPU/1bitCPU_ryosuke_takagai.gds',
      },
      {
        name: 'cat_nekonekone',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/cat_nekonekone',
      },
    ],
    description: '1bit-CPU回路 / OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_03/blob/main/README.md',
    ],
  },
  {
    name: 'SiCA 04',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_04/main/src/tr_1um_SiCA04.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_04',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_04/main/images/all_frame.png',
    members: [
      {
        name: 'suzuki_go',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_04/blob/main/1bitCPU/1bitCPU_suzuki_go.gds',
      },
      {
        name: 'houta',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/houta',
      },
    ],
    description: '1bit-CPU回路 / OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_04/blob/main/README.md',
    ],
  },
  {
    name: 'SiCA 05',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_05/main/src/tr_1um_SiCA05.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_05',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_05/main/images/all_frame.png',
    members: [
      {
        name: 'Suzuki_Naotaro',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_05/blob/main/1bitCPU/1bitCPU_Suzuki_Naotaro.gds',
      },
      {
        name: 'yamada',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/yamada',
      },
    ],
    description: '1bit-CPU回路 / OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_05/blob/main/README.md',
    ],
  },
  {
    name: 'SiCA 06',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_06/main/src/tr_1um_SiCA06.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_06',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_06/main/images/all_frame.png',
    members: [
      {
        name: 'tsukagoshi_tomonobu',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_06/blob/main/1bitCPU/1bitCPU_tsukagoshi_tomonobu.gds',
      },
      {
        name: 'makoto645',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/makoto645',
      },
    ],
    description: '1bit-CPU回路 / OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_06/blob/main/README.md',
    ],
  },
  {
    name: 'SiCA 07',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_07/main/src/tr_1um_SiCA07.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_07',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_07/main/images/all_frame.png',
    members: [
      {
        name: 'Haruto_Tanaka',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_07/blob/main/1bitCPU/1bitCPU_Haruto_Tanaka.gds',
      },
      {
        name: 'kubotakeshi',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/kubotakeshi',
      },
    ],
    description: '1bit-CPU回路 / OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_07/blob/main/README.md',
    ],
  },
  {
    name: 'SiCA 08',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08/main/src/tr_1um_SiCA08.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08/main/images/all_frame.png',
    members: [
      {
        name: 'Kanta_Fukuda',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08/blob/main/src/tr_1um_SiCA08.gds',
        note: 'GDS cell name',
      },
      {
        name: 'july_fifth',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/july_fifth',
      },
    ],
    description: '1bit-CPU回路 / OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08/blob/main/src/tr_1um_SiCA08.gds',
    ],
  },
  {
    name: 'SiCA 10',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_10/main/src/tr_1um_SiCA10.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_10',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_10/main/images/all_frame.png',
    members: [
      {
        name: 'SotaTakagi',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_10/blob/main/1bitCPU/1bitCPUgen_SotaTakagi.gds',
      },
      {
        name: 'PenguinEino',
        design: 'SRAM回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/SRAM/PenguinEino',
      },
    ],
    description: '1bit-CPU回路 / SRAM回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_10/blob/main/README.md',
    ],
  },
  {
    name: 'ZEP',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/main/src/tr_1um_ZEP.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/main/images/all_frame.png',
    members: [
      {
        name: 'kato',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/inverter/kato',
      },
      {
        name: 'sasaki',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/inverter/sasaki',
      },
      {
        name: 'kudo',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/inverter/kudo',
      },
      {
        name: 'tarry',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/tarry',
      },
      {
        name: 'yanzm',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/yanzm',
      },
      {
        name: 'Yourein',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/Yourein',
      },
      {
        name: 'cat_nekonekone',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/cat_nekonekone',
      },
      {
        name: 'makoto645',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/makoto645',
      },
    ],
    description: 'インバータ回路 / 巨大インバータ回路 / リングオシレータ型VCO',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/inverter',
    ],
    additionalCircuits: [
      {
        design: '巨大インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/inverter/big',
      },
      {
        design: 'リングオシレータ型VCO',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/ringOSC',
      },
    ],
  },
  {
    name: 'AUDIO OPAMP 01',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01/main/src/tr_1um_AUDIO_OPAMP01.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01/main/images/all_frame.png',
    members: [
      {
        name: 'Noriko_Miyazaki',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01/tree/main/opamp_r2r_audio/Noriko_Miyazaki',
      },
      {
        name: 'TOSHIO_NAKAMURA',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01/tree/main/opamp_r2r_audio/TOSHIO_NAKAMURA',
      },
      {
        name: 'zawa',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/zawa',
      },
    ],
    description: 'オーディオ用OPAMP回路 / OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01/blob/main/README.md',
    ],
  },
  {
    name: 'AUDIO OPAMP 02',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02/main/src/tr_1um_AUDIO_OPAMP02.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02/main/images/all_frame.png',
    members: [
      {
        name: 'ASAKO_IWAI',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02/tree/main/opamp_r2r_audio/ASAKO_IWAI',
      },
      {
        name: 'tomoaki_mori',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02/tree/main/opamp_r2r_audio/tomoaki_mori',
      },
      {
        name: 'sable',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/sable',
      },
    ],
    description: 'オーディオ用OPAMP回路 / OPAMP回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02/blob/main/README.md',
    ],
  },
  {
    name: 'AUDIO OPAMP 03',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03/main/src/tr_1um_AUDIO_OPAMP03.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03/main/images/all_frame.png',
    members: [
      {
        name: 'AyatoFukushima',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03/tree/main/opamp_r2r_audio/AyatoFukushima',
      },
      {
        name: 'YutoSasaki',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03/tree/main/opamp_r2r_audio/YutoSasaki',
      },
      {
        name: 'ytr0',
        design: 'SRAM回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/SRAM/ytr0',
      },
    ],
    description: 'オーディオ用OPAMP回路 / SRAM回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03/blob/main/README.md',
    ],
  },
  {
    name: 'AUDIO OPAMP 04',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP04/main/src/tr_1um_AUDIO_OPAMP04.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP04',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP04/main/images/all_frame.png',
    members: [
      {
        name: 'ChihiroNishimura',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP04/tree/main/opamp_r2r_audio/ChihiroNishimura',
      },
      {
        name: 'makoto645',
        design: '555タイマー回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/555timer/makoto645',
      },
      {
        name: 'ShuntaroOHNO',
        design: 'Clock Divider回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/ClockDivider/ShuntaroOHNO',
      },
    ],
    description: 'オーディオ用OPAMP回路 / 555タイマー回路 / Clock Divider回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP04/blob/main/README.md',
    ],
  },
  {
    name: 'AUDIO OPAMP 05',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP05/main/src/tr_1um_AUDIO_OPAMP05.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP05',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP05/main/images/all_frame.png',
    members: [
      {
        name: 'HijiriMatsuura',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP05/tree/main/opamp_r2r_audio/HijiriMatsuura',
      },
      {
        name: '0x837c',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/0x837c',
      },
      {
        name: '7158918',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/7158918',
      },
      {
        name: 'eycjur',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/eycjur',
      },
      {
        name: 'jijinbei',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/jijinbei',
      },
    ],
    description: 'オーディオ用OPAMP回路 / インバータ回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP05/blob/main/README.md',
    ],
  },
  {
    name: 'AUDIO OPAMP 06',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP06/main/src/tr_1um_AUDIO_OPAMP06.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP06',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP06/main/images/all_frame.png',
    members: [
      {
        name: 'MiyabiYoshino',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP06/tree/main/opamp_r2r_audio/MiyabiYoshino',
      },
      {
        name: 'makoto_5555',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/makoto_5555',
      },
      {
        name: 'sai1231s',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/sai1231s',
      },
      {
        name: 'Talkie_junk',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/Talkie_junk',
      },
      {
        name: 'WEI_YICHENG',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/WEI_YICHENG',
      },
    ],
    description: 'オーディオ用OPAMP回路 / インバータ回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP06/blob/main/README.md',
    ],
  },
  {
    name: 'AUDIO OPAMP 07',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP07/main/src/tr_1um_AUDIO_OPAMP07.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP07',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP07/main/images/all_frame.png',
    members: [
      {
        name: 'MizukiItou',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP07/tree/main/opamp_r2r_audio/MizukiItou',
      },
      {
        name: 'PenguinEino',
        design: '平衡3値論理回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/balanced-ternary-logic/PenguinEino',
      },
    ],
    description: 'オーディオ用OPAMP回路 / 平衡3値論理回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP07/blob/main/README.md',
    ],
  },
  {
    name: 'AUDIO OPAMP 08',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP08/main/src/tr_1um_AUDIO_OPAMP08.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP08',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP08/main/images/all_frame.png',
    members: [
      {
        name: 'ikeay',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP08/tree/main/opamp_r2r_audio/ikeay',
      },
      {
        name: 'noritsuna',
        design: 'LPF回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/LPF/noritsuna',
      },
    ],
    description: 'オーディオ用OPAMP回路 / LPF回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP08/blob/main/README.md',
    ],
  },
  {
    name: 'AUDIO OPAMP 09',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09/main/src/tr_1um_AUDIO_OPAMP09.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09/main/images/all_frame.png',
    members: [
      {
        name: 'DaisukeSaito',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09/tree/main/opamp_r2r_audio/DaisukeSaito',
      },
      {
        name: '3zki',
        design: 'オーディオ用OPAMP回路x2',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/3zki',
      },
    ],
    description: 'オーディオ用OPAMP回路 / オーディオ用OPAMP回路x2',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09/blob/main/README.md',
    ],
  },
  {
    name: 'OpenSUSI 01',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI01/main/src/tr_1um_OpenSUSI01.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI01',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI01/main/images/all_frame.png',
    members: [
      {
        name: '木野先生（九州大学）',
        design: 'PMOS / NMOS TEG',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI01/tree/main/TEG/Kino',
      },
    ],
    description: 'PMOS / NMOS TEG',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI01/blob/main/README.md',
    ],
  },
  {
    name: 'OpenSUSI 02',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI02/main/src/tr_1um_OpenSUSI02.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI02',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI02/main/images/all_frame.png',
    members: [
      {
        name: 'YuMaehashi',
        design: 'CMOSイメージセンサー',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/imager/YuMaehashi',
      },
      {
        name: 'makoto56',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/OpenSUSI/makoto56',
      },
    ],
    description: 'CMOSイメージセンサー / インバータ回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI02/blob/main/README.md',
    ],
  },
  {
    name: 'OpenSUSI 03',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI03/main/src/tr_1um_OpenSUSI03.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI03',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI03/main/images/all_frame.png',
    members: [
      {
        name: 'noritsuna',
        design: 'AMラジオ（レイアウト）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/noritsuna',
      },
      {
        name: 'Yamada3',
        design: 'AMラジオ（元回路・Yamada3チーム）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'Maehashi',
        design: 'AMラジオ（元回路・Yamada3チーム）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'Munetomo',
        design: 'AMラジオ（元回路・Yamada3チーム）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'reodon',
        design: 'AMラジオ（元回路・Yamada3チーム）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'Sadakata',
        design: 'AMラジオ（元回路・Yamada3チーム）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'tk',
        design: 'AMラジオ（元回路・Yamada3チーム）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
      {
        name: 'Yutaka KOTANI',
        design: 'AMラジオ（元回路・Yamada3チーム）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
      },
    ],
    description: 'AMラジオ（レイアウト） / AMラジオ（元回路・Yamada3チーム）',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI03/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/member_project/AM_Radio/Yamada3/image/AMRadioMember.png',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/member_project/AM_Radio/Yamada3/README.md',
    ],
  },
  {
    name: 'OpenSUSI 04',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI04/main/src/tr_1um_OpenSUSI04.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI04',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI04/main/images/all_frame.png',
    members: [
      {
        name: 'ShuntaroOHNO',
        design: '半導体計測用アドレスデコーダ・マルチプレクサ',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/Charactorization/ShuntaroOHNO',
      },
    ],
    description: '半導体計測用アドレスデコーダ・マルチプレクサ',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI04/blob/main/README.md',
    ],
  },
  {
    name: 'OpenSUSI 05',
    url: 'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI05/main/src/tr_1um_OpenSUSI05.gds',
    repository:
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI05',
    source: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1',
    preview:
      'https://raw.githubusercontent.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI05/main/images/all_frame.png',
    members: [
      {
        name: 'DaisukeSaito',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09/tree/main/opamp_r2r_audio/DaisukeSaito',
        note: 'Matched GDS cell',
      },
      {
        name: '3zki',
        design: '計装アンプ',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/InstrumentationAmplifier/3zki',
      },
      {
        name: 'PenguinEino',
        design: 'RGB121 VGA出力回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/RGB121_VGA/PenguinEino',
      },
    ],
    description: 'オーディオ用OPAMP回路 / 計装アンプ / RGB121 VGA出力回路',
    creditSources: [
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI05/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP09/blob/main/README.md',
      'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_OpenSUSI05/blob/main/src/tr_1um_OpenSUSI05.gds',
    ],
  },
];
