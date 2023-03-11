export class Form {
  key: string;
  value: string | undefined;
  label: string;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  rule = {} as {
    required: boolean;
  }

  constructor(options: {
    value?: string;
    key?: string;
    label?: string;
    order?: number;
    controlType?: string;
    type?: string;
    options?: {key: string, value: string}[];
    rule?: {
      required: boolean
    }
  } = {}) {
    this.key = options.key || '';
    this.value = options.value;
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.rule = options.rule ? options.rule : {} as {required: boolean};
  }
}
