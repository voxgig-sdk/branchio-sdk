

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BranchioSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('UrlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BRANCHIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('BRANCHIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BranchioSDK.test()
    const ent = testsdk.Url()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BRANCHIO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'url.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"alias","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"branch_key","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"campaign","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"channel","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"data","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"feature","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"url","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /url","json":"{\"operationId\":\"createLink\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"alias\":{\"type\":\"string\"},\"branch_key\":{\"type\":\"string\"},\"campaign\":{\"type\":\"string\"},\"channel\":{\"type\":\"string\"},\"data\":{\"type\":\"object\"},\"feature\":{\"type\":\"string\"}},\"required\":[\"branch_key\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The created link\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/url","segments":[{"lit":"url"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"url","name__orig":"url","Name":"Url","name_":"url","name-":"url","NAME":"URL","index$":0}, {"active":true,"entity":"url","key$":"BasicUrlFlow","kind":"basic","name":"BasicUrlFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"url_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Url')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const url_ref01_ent = client.Url()
    let url_ref01_data = setup.data.new.url['url_ref01']

    url_ref01_data = (await url_ref01_ent.create(url_ref01_data)).data()
    assert(null != url_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/url/UrlTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BranchioSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['url01','url02','url03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BRANCHIO_TEST_URL_ENTID': idmap,
    'BRANCHIO_TEST_LIVE': 'FALSE',
    'BRANCHIO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BRANCHIO_TEST_URL_ENTID']

  const live = 'TRUE' === env.BRANCHIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BRANCHIO_TEST_URL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BranchioSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BRANCHIO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
