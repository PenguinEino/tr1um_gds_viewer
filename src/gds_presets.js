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
        cells: ['JJY'],
      },
      {
        name: 'Maehashi',
        design: 'BGR',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/BGR/Maehashi',
        cells: ['bgr_top'],
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
        cells: ['AM_Radio'],
      },
      {
        name: 'Maehashi',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
        cells: ['AM_Radio'],
      },
      {
        name: 'Munetomo',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
        cells: ['AM_Radio'],
      },
      {
        name: 'reodon',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
        cells: ['AM_Radio'],
      },
      {
        name: 'Sadakata',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
        cells: ['AM_Radio'],
      },
      {
        name: 'tk',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
        cells: ['AM_Radio'],
      },
      {
        name: 'Yutaka KOTANI',
        design: 'AM Receiver',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/Yamada3',
        cells: ['AM_Radio'],
      },
      {
        name: 'ShuntaroOHNO',
        design: 'DCDC Converter',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/DCDC/ShuntaroOHNO',
        cells: ['dcdc_1k'],
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
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken',
        cells: ['fujii_inverter'],
      },
      {
        name: 'kamiyama',
        design: 'インバータ回路 / Driver',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken',
        cells: ['kamiyama_inverter', 'kamiyama_Driver'],
      },
      {
        name: 'kawamoto',
        design: 'インバータ回路',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken',
        cells: ['kawamoto_inverter'],
      },
      {
        name: 'shishido',
        design: 'OPAMP回路',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken',
        cells: ['shishido_opamp_v12'],
      },
      {
        name: 'exodjp',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/exodjp',
        cells: ['inverter_exodjp'],
      },
      {
        name: 'july_fifth',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/july_fifth',
        cells: ['inverter_july_fifth'],
      },
      {
        name: 'kubotakeshi',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/kubotakeshi',
        cells: ['inverter_kubotakeshi'],
      },
      {
        name: 'pankani',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/pankani',
        cells: ['inverter_pankani'],
      },
      {
        name: 'yasushitech',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/sanken/yasushitech',
        cells: ['inverter_yasushitech'],
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
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken',
        cells: ['mmOPAMP', 'mmBIAS'],
      },
      {
        design: '回路選択用アナログスイッチ / デコーダ',
        url: 'https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken',
        cells: ['ASW', 'ASWS', 'ASWSL', 'AND4_X1'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_01',
        cells: ['1bitCPU_SatoshiSasaki'],
      },
      {
        name: 'yumu19',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/yumu19',
        cells: ['inverter_yumu19'],
      },
      {
        name: 'soraoto06',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/soraoto06',
        cells: ['inverter_soraoto06'],
      },
      {
        name: 'Miyamoto_sprzk_naoyuki',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/Miyamoto_sprzk_naoyuki',
        cells: ['inverter_Miyamoto_sprzk_naoyuki'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_02',
        cells: ['1bitCPU_2223310'],
      },
      {
        name: 'Luft256',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/Luft256',
        cells: ['inverter_Luft256'],
      },
      {
        name: 'shkoga',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/shkoga',
        cells: ['inverter_shkoga'],
      },
      {
        name: 'TadasukeKuramochi',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/TadasukeKuramochi',
        cells: ['inverter_TadasukeKuramochi'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_03',
        cells: ['1bitCPU_TakenMaker'],
      },
      {
        name: 'ANT_taro',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/ANT_taro',
        cells: ['inverter_ANT_taro'],
      },
      {
        name: 'jog',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ichiken/jog',
        cells: ['inverter_jog'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04',
        cells: ['1bitCPU_Yamaoka'],
      },
      {
        name: 'EinosukeOkazaki',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04',
        cells: ['inverter_EinosukeOkazaki'],
      },
      {
        name: 'NanTarou',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04',
        cells: ['inverter_NanTarou'],
      },
      {
        name: 'RS_232_C',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_04',
        cells: ['inverter_RS_232_C'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_05',
        cells: ['1bitCPU_Miyazaki'],
      },
      {
        name: 'ohno',
        design: 'I2C回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/I2C/ShuntaroOHNO',
        cells: ['i2c_gpio_fullchip'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ichiken_06',
        cells: ['1bitCPU_Isobe'],
      },
      {
        name: 'ichiken',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/ichiken',
        cells: ['opamp_r2r_ichiken2'],
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
        cells: ['single_end_double_balanced_passive_switch_mixer'],
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
        cells: ['opamp_r2r_AK'],
      },
      {
        name: 'チームHK',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_01/tree/main/member_project/HK',
        cells: ['opamp_r2r_HK'],
      },
      {
        name: 'yamazaki',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/yamazaki',
        cells: ['opamp_r2r_yamazaki'],
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
        cells: ['opamp_r2r_KM'],
      },
      {
        name: 'チームMR',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_kyoto-ths_02/tree/main/member_project/MR',
        cells: ['opamp_r2r_MR'],
      },
      {
        name: 'KabechiFC',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/KabechiFC',
        cells: ['opamp_r2r_KabechiFC'],
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
        cells: ['frame_Tiny555'],
      },
      {
        name: 'noritsuna',
        design: '4bit 6T SRAM回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/SRAM/noritsuna',
        cells: ['4bit_sram'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01',
        cells: ['1bitCPU_Ko_Choen'],
      },
      {
        name: 'kubotakeshi',
        design: '1bit-CPU回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_01',
        cells: ['1bitCPU_kubotakeshi'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_02',
        cells: ['1bitCPU_Fukushima_Ayato'],
      },
      {
        name: 'zawa',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/zawa',
        cells: ['opamp_r2r_OPamp_zawa'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_03',
        cells: ['1bitCPU_ryosuke_takagai'],
      },
      {
        name: 'cat_nekonekone',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/cat_nekonekone',
        cells: ['opamp_cat_nekonekone'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_04',
        cells: ['1bitCPU_suzuki_go'],
      },
      {
        name: 'houta',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/houta',
        cells: ['opamp_houta'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_05',
        cells: ['1bitCPU_Suzuki_Naotaro'],
      },
      {
        name: 'yamada',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/yamada',
        cells: ['opamp_yamada'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_06',
        cells: ['1bitCPU_tsukagoshi_tomonobu'],
      },
      {
        name: 'makoto645',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/makoto645',
        cells: ['opamp_makoto645'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_07',
        cells: ['1bitCPU_Haruto_Tanaka'],
      },
      {
        name: 'kubotakeshi',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/kubotakeshi',
        cells: ['opamp_kubotakeshi'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_08',
        cells: ['1bitCPU_Kanta_Fukuda'],
      },
      {
        name: 'july_fifth',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/july_fifth',
        cells: ['opamp_july_fifth'],
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
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_SiCA_10',
        cells: ['1bitCPUgen_SotaTakagi'],
      },
      {
        name: 'PenguinEino',
        design: 'SRAM回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/SRAM/PenguinEino',
        cells: ['sram512'],
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
        cells: ['inverter_kato1'],
      },
      {
        name: 'sasaki',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/inverter/sasaki',
        cells: ['inverter_ssk'],
      },
      {
        name: 'kudo',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/inverter/kudo',
        cells: ['inverter_kudo'],
      },
      {
        name: 'tarry',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/tarry',
        cells: ['inverter_tarry'],
      },
      {
        name: 'yanzm',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/yanzm',
        cells: ['inverter_yanzm'],
      },
      {
        name: 'Yourein',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/Yourein',
        cells: ['inverter_Yourein'],
      },
      {
        name: 'cat_nekonekone',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/cat_nekonekone',
        cells: ['inverter_cat_nekonekone'],
      },
      {
        name: 'makoto645',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/ZEP/makoto645',
        cells: ['inverter_makoto645'],
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
        cells: ['inverter_big'],
      },
      {
        design: 'リングオシレータ型VCO',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_ZEP/tree/main/ringOSC',
        cells: ['vco'],
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
        cells: ['opamp_r2r_Miyazaki'],
      },
      {
        name: 'TOSHIO_NAKAMURA',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP01/tree/main/opamp_r2r_audio/TOSHIO_NAKAMURA',
        cells: ['opamp_r2r_TOSHIO_NAKAMURA'],
      },
      {
        name: 'zawa',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/zawa',
        cells: ['opamp_r2r_ABAMP'],
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
        cells: ['opamp_r2r_ASAKOIWAI'],
      },
      {
        name: 'tomoaki_mori',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP02/tree/main/opamp_r2r_audio/tomoaki_mori',
        cells: ['opamp_r2r_tomoaki_mori'],
      },
      {
        name: 'sable',
        design: 'OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp/sable',
        cells: ['opamp_sable'],
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
        cells: ['opamp_r2r_fukushima'],
      },
      {
        name: 'YutoSasaki',
        design: 'オーディオ用OPAMP回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1_AUDIO_OPAMP03/tree/main/opamp_r2r_audio/YutoSasaki',
        cells: ['opamp_r2r_sasaki'],
      },
      {
        name: 'ytr0',
        design: 'SRAM回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/SRAM/ytr0',
        cells: ['ytr0_top'],
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
        cells: ['opamp_r2r_chihiro'],
      },
      {
        name: 'makoto645',
        design: '555タイマー回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/555timer/makoto645',
        cells: ['555MOS'],
      },
      {
        name: 'ShuntaroOHNO',
        design: 'Clock Divider回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/ClockDivider/ShuntaroOHNO',
        cells: ['clock_divider_by4_fullchip'],
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
        cells: ['opamp_r2r_MatsuuraHijiri'],
      },
      {
        name: '0x837c',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/0x837c',
        cells: ['inverter_0x837c'],
      },
      {
        name: '7158918',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/7158918',
        cells: ['inverter_7158918'],
      },
      {
        name: 'eycjur',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/eycjur',
        cells: ['inverter_eycjur'],
      },
      {
        name: 'jijinbei',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/jijinbei',
        cells: ['inverter_jijinbei'],
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
        cells: ['opamp_r2r_YoshinoMiyabi'],
      },
      {
        name: 'makoto_5555',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/makoto_5555',
        cells: ['inverter_makoto_5555'],
      },
      {
        name: 'sai1231s',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/sai1231s',
        cells: ['inverter_sai1231s'],
      },
      {
        name: 'Talkie_junk',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/Talkie_junk',
        cells: ['inverter_Talkie_junk'],
      },
      {
        name: 'WEI_YICHENG',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/RISE-A/WEI_YICHENG',
        cells: ['inverter_wei_Rev2'],
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
        cells: ['opamp_r2r_itoumizuki'],
      },
      {
        name: 'PenguinEino',
        design: '平衡3値論理回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/balanced-ternary-logic/PenguinEino',
        cells: ['mac'],
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
        cells: ['opamp_r2r_ikeay'],
      },
      {
        name: 'noritsuna',
        design: 'LPF回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/LPF/noritsuna',
        cells: ['LPF'],
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
        cells: ['opamp_r2r_saito'],
      },
      {
        name: '3zki',
        design: 'オーディオ用OPAMP回路x2',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/opamp_r2r_audio/3zki',
        cells: ['opamp_3zki_R06_2V5_FULL', 'opamp_3zki_R06_2V5_small'],
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
        cells: ['nmos_array1', 'pmos_array1'],
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
        cells: ['imager'],
      },
      {
        name: 'makoto56',
        design: 'インバータ回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/inverter/OpenSUSI/makoto56',
        cells: ['inverter_makoto56'],
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
        design: 'AMラジオ（究極のレイアウト版）',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/AM_Radio/noritsuna',
        cells: ['AM_Radio'],
      },
    ],
    description: 'AMラジオ（究極のレイアウト版）',
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
        cells: ['tr_1um_OpenSUSI04'],
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
        cells: ['opamp_r2r_saito'],
      },
      {
        name: '3zki',
        design: '計装アンプ',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/InstrumentationAmplifier/3zki',
        cells: ['opamp_3zki_ina_first', 'opamp_3zki_ina_out'],
      },
      {
        name: 'PenguinEino',
        design: 'RGB121 VGA出力回路',
        url: 'https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1/tree/main/member_project/RGB121_VGA/PenguinEino',
        cells: ['ishi_vga_core'],
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
