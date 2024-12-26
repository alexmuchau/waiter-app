import { PrismaClient as DesktopPrismaClient } from './desktop_db/generated'
import { PrismaClient as MobilePrismaClient } from './mobile_db/generated'

export const desktopClient = new DesktopPrismaClient()
export const mobileClient = new MobilePrismaClient()