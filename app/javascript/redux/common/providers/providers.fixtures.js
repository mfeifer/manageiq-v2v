import Immutable from 'seamless-immutable';

export const providers = Immutable({
  resources: [
    {
      href: 'http://0.0.0.0:8080/api/providers/4',
      id: '4',
      name: 'rhv42 Network Manager',
      created_on: '2018-07-20T19:38:05Z',
      updated_on: '2018-07-20T20:09:58Z',
      guid: 'e5593312-ade9-457d-993f-58575fb39683',
      zone_id: '1',
      type: 'ManageIQ::Providers::Redhat::NetworkManager',
      api_version: 'v2',
      uid_ems: null,
      host_default_vnc_port_start: null,
      host_default_vnc_port_end: null,
      provider_region: null,
      last_refresh_error: 'Connection refused - connect(2) for 10.8.197.37:35357 (Errno::ECONNREFUSED)',
      last_refresh_date: '2018-07-20T20:09:58Z',
      provider_id: null,
      realm: null,
      tenant_id: '1',
      project: null,
      parent_ems_id: '3',
      subscription: null,
      last_metrics_error: null,
      last_metrics_update_date: null,
      last_metrics_success_date: null,
      tenant_mapping_enabled: null,
      enabled: true,
      options: null,
      zone_before_pause_id: null
    },
    {
      href: 'http://0.0.0.0:8080/api/providers/3',
      id: '3',
      name: 'rhv42',
      created_on: '2018-07-20T19:37:51Z',
      updated_on: '2018-07-20T20:10:00Z',
      guid: '16873094-6031-4a51-9437-93c8b43daf31',
      zone_id: '1',
      type: 'ManageIQ::Providers::Redhat::InfraManager',
      api_version: '4.2.5.1-0.1.el7ev',
      uid_ems: null,
      host_default_vnc_port_start: null,
      host_default_vnc_port_end: null,
      provider_region: null,
      last_refresh_error: null,
      last_refresh_date: '2018-07-20T20:10:00Z',
      provider_id: null,
      realm: null,
      tenant_id: '1',
      project: null,
      parent_ems_id: null,
      subscription: null,
      last_metrics_error: null,
      last_metrics_update_date: null,
      last_metrics_success_date: null,
      tenant_mapping_enabled: null,
      enabled: true,
      options: null,
      zone_before_pause_id: null
    },
    {
      href: 'http://0.0.0.0:8080/api/providers/2',
      id: '2',
      name: 'vSphere 6.7 (nested)',
      created_on: '2018-07-20T19:36:48Z',
      updated_on: '2018-07-20T20:22:21Z',
      guid: '23f42555-c6b1-433f-9a8a-b76813153463',
      zone_id: '1',
      type: 'ManageIQ::Providers::Vmware::InfraManager',
      api_version: '6.7',
      uid_ems: '507c6db1-f640-4b14-8feb-4e130fc84083',
      host_default_vnc_port_start: null,
      host_default_vnc_port_end: null,
      provider_region: null,
      last_refresh_error: null,
      last_refresh_date: '2018-07-20T20:22:21Z',
      provider_id: null,
      realm: null,
      tenant_id: '1',
      project: null,
      parent_ems_id: null,
      subscription: null,
      last_metrics_error: null,
      last_metrics_update_date: null,
      last_metrics_success_date: null,
      tenant_mapping_enabled: null,
      enabled: true,
      options: null,
      zone_before_pause_id: null
    },
    {
      href: 'http://0.0.0.0:8080/api/providers/1',
      id: '1',
      name: 'Embedded Ansible Automation Manager',
      created_on: '2018-07-20T15:23:36Z',
      updated_on: '2018-07-20T21:25:18Z',
      guid: 'a0709b29-c310-442f-93a8-e92756938cfb',
      zone_id: '1',
      type: 'ManageIQ::Providers::EmbeddedAnsible::AutomationManager',
      api_version: '1.0.6.35',
      uid_ems: null,
      host_default_vnc_port_start: null,
      host_default_vnc_port_end: null,
      provider_region: null,
      last_refresh_error: null,
      last_refresh_date: '2018-07-20T21:25:18Z',
      provider_id: '1',
      realm: null,
      tenant_id: '1',
      project: null,
      parent_ems_id: null,
      subscription: null,
      last_metrics_error: null,
      last_metrics_update_date: null,
      last_metrics_success_date: null,
      tenant_mapping_enabled: null,
      enabled: true,
      options: null,
      zone_before_pause_id: null
    }
  ]
});
