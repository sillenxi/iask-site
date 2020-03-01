import React from 'react';
import classNames from 'classnames';
import './AccoladeModal.scss';
import { Acclaim } from '..';

interface Props {
  data: Acclaim
  visible: boolean
  onMaskClick: Function
}

function AccoladeModal(props: Props) {
  const data = props.data;

  const handleMaskClick = () => {
    props.onMaskClick();
  }

  return (
    <div className={classNames('accolade-modal', { visible: props.visible })}
      onClick={handleMaskClick}
    >
      <div className="accolade-content accolade">
        <div className="accolade__head">
          <div className="accolade__name">{data.name}</div>
          <div className="accolade__position">{data.position}</div>
        </div>
        <div className="accolade__content">{data.comment}</div>
      </div>
    </div>
  )
}

AccoladeModal.defaultProps = {
  visible: true
}

export default AccoladeModal;