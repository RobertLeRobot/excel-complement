Office.onReady(function () {}),
    Office.actions.associate("action", function (e) {
        var i = { type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage, message: "Performed action.", icon: "Icon.80x80", persistent: !0 };
        Office.context.mailbox.item.notificationMessages.replaceAsync("action", i), e.completed();
    });
