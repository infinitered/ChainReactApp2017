import test from 'ava'
import { call } from 'redux-saga/effects'
import { open, visitGithub, visitTwitter } from '../../App/Sagas/SocialSagas'
import ScheduleActions from '../../App/Redux/ScheduleRedux'

test('visiting github with no account given', t => {
  const action = ScheduleActions.visitGithub(undefined)
  const gen = visitGithub(action)
  t.deepEqual(
    gen.next().value,
    call(open, 'https://github.com/infinitered/chainreactapp')
  )
  t.true(gen.next().done)
})

test('visiting github with an account', t => {
  const action = ScheduleActions.visitGithub('skellock')
  const gen = visitGithub(action)
  t.deepEqual(
    gen.next().value,
    call(open, 'https://github.com/skellock')
  )
  t.true(gen.next().done)
})

test('visiting twitter with no account given', t => {
  const action = ScheduleActions.visitTwitter(undefined)
  const gen = visitTwitter(action)
  t.deepEqual(
    gen.next().value,
    call(open, 'twitter://user?screen_name=chainreactconf')
  )
  t.deepEqual(
    gen.next().value,
    call(open, 'https://twitter.com/chainreactconf')
  )
  t.true(gen.next().done)
})

test('visiting twitter with an account', t => {
  const action = ScheduleActions.visitTwitter('skellock')
  const gen = visitTwitter(action)
  t.deepEqual(
    gen.next().value,
    call(open, 'twitter://user?screen_name=skellock')
  )
  t.deepEqual(
    gen.next().value,
    call(open, 'https://twitter.com/skellock')
  )
  t.true(gen.next().done)
})
