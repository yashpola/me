import { DiscordNotification } from "@penseapp/discord-notification";

export const discordAlertNotification = new DiscordNotification(
  "Yashwit's Website",
  import.meta.env.DISCORD_ALERT_WEBHOOK
);
