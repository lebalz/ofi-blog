import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach as holiday, faGraduationCap as test, faCalendarDay as event, faInfo as info, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import styles from './Table.module.scss';
import clsx from 'clsx';

export enum Type {
  Holiday = 'holiday',
  Event = 'event',
  Test = 'test',
  Info = 'info'
}

const ICON_MAPPING: { [key in Type]: IconDefinition } = {
  [Type.Holiday]: holiday,
  [Type.Event]: event,
  [Type.Test]: test,
  [Type.Info]: info,
}

interface CellProps {
  value: string | JSX.Element;
  icon?: JSX.Element;
  align?: "left" | "center" | "right" | "justify" | "char";
}

export class Cell extends React.Component<CellProps> {

  render() {
    const { align, icon } = this.props;
    return (
      <td align={align}>{this.props.value}{icon ? ' ' : ''}{icon}</td>
    )
  }
}

interface iRow {
  cells: (string | JSX.Element)[];
  type?: Type;
}

interface RowProps extends iRow {
  alignments?: ("left" | "center" | "right" | "justify" | "char")[];
}


export class Row extends React.Component<RowProps> {


  icon(): JSX.Element {
    if (!this.props.type) {
      return;
    }
    return <FontAwesomeIcon icon={ICON_MAPPING[this.props.type]} />
  }
  render() {
    const { type, cells } = this.props
    const props: any = {}
    if (type) {
      props.className = styles[type];
    }
    return (
      <tr {...props}>
        {
          cells.map((cell, idx) => {
            const cellProps: CellProps = { value: cell }
            if (idx === 0) {
              cellProps.icon = this.icon();
            }
            if (this.props.alignments && this.props.alignments.length > idx) {
              cellProps.align = this.props.alignments[idx];
            } else {
              cellProps.align = 'left';
            }
            return <Cell {...cellProps} key={idx} />
          })
        }
      </tr>
    );
  }
}

interface TableProps {
  header?: iRow[];
  rows: iRow[];
  alignments?: ("left" | "center" | "right" | "justify" | "char")[];
  size?: 'tiny' | 'small' | 'normal' | 'large';
  compact?: boolean;
  celled?: boolean;
  striped?: boolean;
  collapsing?: boolean;
  selectable?: boolean;
}

export default class Table extends React.Component<TableProps> {
  render() {
    const props: any = {}
    return (
      <table
        style={{ display: 'table', borderCollapse: 'collapse' }}
        className={clsx(
          styles['ofi-table'],
          styles[this.props.size],
          styles[this.props.compact && 'compact'],
          styles[this.props.celled && 'celled'],
          styles[this.props.striped && 'striped'],
          styles[this.props.collapsing && 'collapsing'],
          styles[this.props.selectable && 'selectable']
        )}
      >
        <thead>
          {
            this.props.header && (
              <tr>
                {
                  this.props.header.map((cell, idx) => {
                    const align = (this.props.alignments?.length || 0) > idx ? this.props.alignments[idx] : 'left';
                    return <th align={align} key={idx}>{cell}</th>
                  })

                }
              </tr>
            )
          }
        </thead>
        <tbody>
          {
            this.props.rows.map((row, idx) => {
              return <Row alignments={this.props.alignments} {...row} key={idx} />
            })
          }
        </tbody>
      </table>
    )
  }
}