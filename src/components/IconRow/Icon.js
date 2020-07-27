import React, { Component } from 'react';
import { Image, Popover, OverlayTrigger } from 'react-bootstrap';

export default class Icon extends Component {
    static displayName = Icon.name;

    popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">{this.props.tooltipTitle}</Popover.Title>
        <Popover.Content>
          {this.props.tooltip}
        </Popover.Content>
      </Popover>
    );

    render () {
        const classNames = (
            this.props.shouldAnimate === "false"
            ? 'icon-image'
            : 'icon-image animate'
        );

        const tooltipPlacement = (
            this.props.shouldAnimate === "false"
            ? 'top'
            : 'bottom'
        );

        return (
          
            <OverlayTrigger
              placement={tooltipPlacement}
              delay={{ show: 150, hide: 300 }}
              overlay={this.popover}
            >
              <Image
                id={this.props.id}
                src={this.props.src}
                className={classNames}
                onClick={() => this.props.handleButtonPress(this.props.href)}
              />
            </OverlayTrigger>
        );
    }
}
