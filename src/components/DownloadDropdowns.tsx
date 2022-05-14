import React, { useRef, useState, useCallback, useEffect } from 'react';

import VendorSelector from './VendorSelector'

import { detectOS, UserOS } from '../util/detectOS';
import { capitalize } from '../util/capitalize';
import { oses, arches, packageTypes, versions, defaultVersion, defaultArchitecture, defaultPackageType} from '../util/defaults'
import { useTranslation } from 'gatsby-plugin-react-i18next'
let defaultOS = 'any'
let defaultArch = 'any'

const DownloadDropdowns = ({updaterAction, marketplace, Table}) => {
    const { t } = useTranslation()
    if (marketplace) {
        defaultArch = defaultArchitecture;
        const userOS = detectOS();
        switch (userOS) {
          case UserOS.MAC:
            defaultOS = 'mac'
            break;
          case UserOS.LINUX:
          case UserOS.UNIX:
            defaultOS = 'linux'
            break;
          default:
            defaultOS = 'windows'
            break;
        }
    }

    const [os, updateOS] = useState({os: defaultOS});
    const [arch, updateArch] = useState({arch: defaultArch});
    const [packageType, updatePackageType] = useState({packageType: defaultPackageType});
    const [version, udateVersion] = useState({version: defaultVersion});
    
    // Marketplace vendor selector only
    const checkboxRef = useRef({});
    const [checkbox, updateCheckbox] = useState({checkboxRef});

    const [releases, setReleases] = useState(null);

    useEffect(() => {
        (async () => {
          setReleases(await updaterAction(version.version, os.os, arch.arch, packageType.packageType, checkboxRef));
        })();
    }, [version.version, os.os, arch.arch, packageType.packageType, checkbox]);

    const setOS = useCallback((os) => {
        updateOS({os: os});
    }, []);

    const setArch = useCallback((arch) => {
        updateArch({arch: arch});
    }, []);

    const setPackageType = useCallback((packageType) => {
        updatePackageType({packageType: packageType});
    }, []);
    
    const setVersion = useCallback((version) => {
        udateVersion({version: version});
    }, []);

    const setCheckbox= useCallback(() => {
        updateCheckbox({checkboxRef});
    }, []);

    return (
        <>
            {marketplace && <VendorSelector checkboxRef={checkboxRef} setCheckbox={setCheckbox} />}
            <div className="input-group mb-5 row g-2">
                <div className="input-group-prepend flex-colunm col-12 col-md-3">
                    <label className="px-2 fw-bold" htmlFor="os">{t('downloadDropdowns_OS')}</label>
                    <select id="os-filter" onChange={(e) => setOS(e.target.value)} defaultValue={defaultOS} className="form-select form-select-sm">
                        <option key="any" value="any">{t('downloadDropdowns_option_any')}</option>
                        {oses.map(
                            (os, i): string | JSX.Element => os && (
                                <option key={os.toLowerCase()} value={os.toLowerCase()}>{capitalize(os)}</option>
                            )
                        )}
                    </select>
                </div>
                <div className="input-group-prepend flex-colunm col-12 col-md-3">
                    <label className="px-2 fw-bold" htmlFor="arch">{t('downloadDropdowns_arch')}</label>
                    <select id="arch-filter" onChange={(e) => setArch(e.target.value)} defaultValue={defaultArch} className="form-select form-select-sm">
                        <option key="any" value="any">{t('downloadDropdowns_option_any')}</option>
                        {arches.map(
                            (arch, i): string | JSX.Element => arch && (
                                <option key={arch.toLowerCase()} value={arch.toLowerCase()}>{arch}</option>
                            )
                        )}
                    </select>
                </div>
                <div className="input-group-prepend flex-colunm col-12 col-md-3">
                    <label className="px-2 fw-bold" htmlFor="package-type">{t('downloadDropdowns_packageType')}</label>
                    <select id="package-type-filter" onChange={(e) => setPackageType(e.target.value)} defaultValue={defaultPackageType} className="form-select form-select-sm">
                        <option key="any" value="any">{t('downloadDropdowns_option_any')}</option>
                        {packageTypes.map(
                            (packageType, i): string | JSX.Element => packageType && (
                                <option key={packageType.toLowerCase()} value={packageType.toLowerCase()}>{packageType}</option>
                            )
                        )}
                    </select>
                </div>
                <div className="input-group-prepend flex-colunm col-12 col-md-3">
                    <label className="px-2 fw-bold" htmlFor="version">{t('downloadDropdowns_version')}</label>
                    <select id="version-filter" onChange={(e) => setVersion(e.target.value)} defaultValue={defaultVersion} className="form-select form-select-sm">
                        {versions.map(
                            (version, i): string | JSX.Element => version && (
                                <option key={version} value={version}>{version}</option>
                            )
                        )}
                    </select>
                </div>
            </div>
            <Table results={releases}/>
        </>
    );
};

export default DownloadDropdowns;