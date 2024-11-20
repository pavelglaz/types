import { SetRequired } from 'type-fest'

import { ProfileFeature, UserFeatures } from '../generated/profileFeature'
import { SessionType } from '../generated/session/sessionType'

export interface BaseSession {
    sessionType: SessionType
}

export interface UserSession {
    sessionType: SessionType.User
    // user: UserTokenData
    features?: UserFeatures
}

export interface DiiaOfficeUserSession extends UserSession {
    features: SetRequired<UserFeatures, ProfileFeature.office>
}

export interface CabinetUserSession {
    sessionType: SessionType.CabinetUser
    // user: CabinetUserTokenData
}

export interface EResidentSession {
    sessionType: SessionType.EResident
    features?: UserFeatures
}

export interface EResidentApplicantSession {
    sessionType: SessionType.EResidentApplicant
}

export interface AcquirerSession {
    sessionType: SessionType.Acquirer
}

export interface PartnerSession {
    sessionType: SessionType.Partner
}

export interface TemporarySession {
    sessionType: SessionType.Temporary
}

export interface ServiceEntranceSession {
    sessionType: SessionType.ServiceEntrance
}

export interface PortalUserSession {
    sessionType: SessionType.PortalUser
}

export interface ServiceUserSession {
    sessionType: SessionType.ServiceUser
}

export type ActionSession =
    | UserSession
    | EResidentSession
    | EResidentApplicantSession
    | AcquirerSession
    | PartnerSession
    | TemporarySession
    | ServiceEntranceSession
    | PortalUserSession
    | ServiceUserSession
    | CabinetUserSession
