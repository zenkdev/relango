/* eslint-disable class-methods-use-this */
import { Modal, notification, Typography } from 'antd';
import { ModalFuncProps } from 'antd/lib/modal';
import { ArgsProps } from 'antd/lib/notification';
import React from 'react';
import { v4 as uuid } from 'uuid';

import { SyncOutlined } from '@ant-design/icons';

import { AlertDialog, AlertMessage, alertService, DialogType, MessageSeverity } from '../../services';

const { Title } = Typography;

class Alerts extends React.Component {
  // private newNotificationCount = 0;

  // private dataLoadingConsecutiveFailures = 0;

  private notificationsLoadingSubscription: any;

  private loginStatusSubscription?: ZenObservable.Subscription;

  private messageSubscription?: ZenObservable.Subscription;

  private stickyMessageSubscription?: ZenObservable.Subscription;

  private dialogSubscription?: ZenObservable.Subscription;

  private stickyToasties: string[] = [];

  public componentDidMount() {
    // this.loginStatusSubscription = authService.getLoginStatusEvent().subscribe(isLoggedIn => {
    //   if (isLoggedIn) {
    //     this.initNotificationsLoading();
    //   } else {
    //     this.unsubscribeNotifications();
    //   }
    // });
    this.messageSubscription = alertService.subscribeMessages(message => this.showNotification(message, false));
    this.stickyMessageSubscription = alertService.subscribeStickyMessages(message => this.showNotification(message, true));
    this.dialogSubscription = alertService.subscribeDialogs(alert => this.showModal(alert));
  }

  public componentWillUnmount() {
    this.unsubscribeNotifications();
    if (this.loginStatusSubscription) {
      this.loginStatusSubscription.unsubscribe();
    }
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.stickyMessageSubscription) {
      this.stickyMessageSubscription.unsubscribe();
    }
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }

  private showNotification = (message: AlertMessage, isSticky: boolean) => {
    if (message == null) {
      // eslint-disable-next-line no-restricted-syntax
      for (const id of this.stickyToasties.slice(0)) {
        notification.close(id);
      }
      return;
    }

    const { summary, detail, severity } = message;

    const notificationProps: ArgsProps = {
      key: uuid(),
      message: summary,
      description: detail,
      duration: isSticky ? 0 : 4,
    };

    if (isSticky) {
      this.stickyToasties.push(notificationProps.key as string);
      notificationProps.onClose = () => {
        const index = this.stickyToasties.indexOf(notificationProps.key as string, 0);
        if (index > -1) {
          this.stickyToasties.splice(index, 1);
        }
      };
    }

    switch (severity) {
      case MessageSeverity.info:
        notification.info(notificationProps);
        break;
      case MessageSeverity.success:
        notification.success(notificationProps);
        break;
      case MessageSeverity.error:
        notification.error(notificationProps);
        break;
      case MessageSeverity.warn:
        notification.warning(notificationProps);
        break;
      case MessageSeverity.wait:
        notificationProps.icon = <SyncOutlined spin />;
        notification.open(notificationProps);
        break;
      default:
        notification.open(notificationProps);
        break;
    }
  };

  private showModal = (alert: AlertDialog) => {
    const { message, type, ...rest } = alert;
    const modalProps: ModalFuncProps = {
      content: <Title level={4}>{message}</Title>,
      ...rest,
      // centered?: boolean,
      // width?: string | number,
      // icon?: React.ReactNode,
      // mask?: boolean,
      // maskClosable?: boolean,
      // zIndex?: number,
      // okCancel?: boolean,
    };

    switch (type) {
      case DialogType.alert:
        Modal.error(modalProps);
        break;
      case DialogType.confirm:
        Modal.confirm(modalProps);
        break;
      case DialogType.prompt:
      default:
        Modal.info(modalProps);
        break;
    }
  };

  private unsubscribeNotifications() {
    if (this.notificationsLoadingSubscription) {
      this.notificationsLoadingSubscription.unsubscribe();
    }
  }

  // private initNotificationsLoading() {
  //   // this.notificationsLoadingSubscription = this.notificationService.getNewNotificationsPeriodically().subscribe(
  //   //   notifications => {
  //   //     this.dataLoadingConsecutiveFailures = 0;
  //   //     this.newNotificationCount = notifications.filter(n => !n.isRead).length;
  //   //   },
  //   //   error => {
  //   //     alertService.logError(error);
  //   //     if (this.dataLoadingConsecutiveFailures++ < 20) {
  //   //       setTimeout(() => this.initNotificationsLoading(), 5000);
  //   //     } else {
  //   //       alertService.showStickyMessage(
  //   //         'Load Error',
  //   //         'Loading new notifications from the server failed!',
  //   //         MessageSeverity.error,
  //   //       );
  //   //     }
  //   //   },
  //   // );
  // }

  // private markNotificationsAsRead() {
  //   // const recentNotifications = this.notificationService.recentNotifications;
  //   // if (recentNotifications.length) {
  //   //   this.notificationService.readUnreadNotification(recentNotifications.map(n => n.id), true).subscribe(
  //   //     response => {
  //   //       for (const n of recentNotifications) {
  //   //         n.isRead = true;
  //   //       }
  //   //       this.newNotificationCount = recentNotifications.filter(n => !n.isRead).length;
  //   //     },
  //   //     error => {
  //   //       alertService.logError(error);
  //   //       alertService.showMessage('Notification Error', 'Marking read notifications failed', MessageSeverity.error);
  //   //     },
  //   //   );
  //   // }
  // }

  public render() {
    return null;
  }
}

export default Alerts;
