---
title: Robonomics OpenGov

contributors: [Leemo94]
---

## 소개

Robonomics는 파라체인의 거버넌스 모델을 Polkadot의 정교한 OpenGov 메커니즘으로 전환하여 토큰 홀더의 궁극적인 의지에 따라 체인이 시간이 지남에 따라 진화할 수 있도록 했습니다.
Robonomics의 OpenGov 전환은 주요 지분을 통제하는 토 홀더 DAO가 항상 Robonomics 파라체인의 방향을 지시할 수 있도록 보장하며, 네트워크에 적합한 모든 변경 사항을 시행할 수 있습니다.

<robo-wiki-note title='Note:' type="warning">
  OpenGov는 Kusama Relay Chain에 연결된 Substrate 기반 체인 인 Robonomics Parachain에만 적용됩니다. OpenGov는 Ethereum 주요 네트워크가 현재 OpenGov와 같은 정교한 거버넌스 시스템을 지원하지 않기 때문에 Robonomics Ethereum 구현에는 적용되지 않습니다.
</robo-wiki-note>

OpenGov는 파라체인에서 일상적인 운영과 의사 결정이 이루어지는 방식을 변경합니다. 이는 레퍼런덤의 범위에 대한 명확성을 제공하며, 파라체인에서 이루어지는 결정의 처리량을 대폭 증가시킬 수 있는 잠재력을 가지고 있습니다.

OpenGov는 글을 작성하는 시점에서 Kusama 릴레이 체인에서 몇 개월 동안 활성화되어 왔으며, 토큰 홀더 DAO가 제안하고 투표하며 투표를 통해 궁극적으로 프로토콜의 방향을 통제할 수 있는 결정(개별 및 분리된 레퍼런덤)의 수를 대폭 증가시키는 것을 입증했습니다.

**이 위키 섹션의 다음 콘텐츠는 Robonomics 파라체인의 OpenGov의 핵심 원칙을 설명하고 OpenGov의 개념을 더 잘 이해하는 데 도움이 되도록 설계되었습니다.**

*프로콜에서 거버넌스는 특히 구현 초기 단계에서 지속적으로 발전하는 메커니즘임을 유념해야 합니다.*

Robonomics OpenGov Track 매개변수에만 관심이 있는 경우 [여기](https://docs.google.com/spreadsheets/d/1CzUKxl5bEhLQRLC223NB81RTH4X4HgAoS1HPng23mXE/edit?usp=sharing)를 참조하십시오.

## 레퍼런덤에 대해

레퍼런덤은 간단하고 포괄적이며 지분 기반 투표 체계입니다. 각 레퍼런덤은 체인의 런타임에서 특정 제안과 연결된 특권 함수 호출의 형태를 취합니다. 이는 가장 강력한 호출 'set_code'를 포함할 수도 있습니다.`, which has the ability to switch out the entire code of the chains' runtime – this is unique to Substrate based chains, and removes the requirement for a "hard fork" of the chain when updating the chains' business logic (runtime).

레퍼런덤은 고정된 투표 기간을 가진 개별 이벤트입니다(레퍼런덤 수명주기의 다른 기간에 대해 나중에 자세히 설명합니다). 개별 토큰 홀더는 레퍼런덤에 대해 동의(AYE), 반대(NAY) 또는 투표를 완전히 거부(ABSTAIN)하는 세 가지 방법 중 하나로 투표할 수 있습니다.

모든 레퍼런덤에는 실행 지연이 연결됩니다. 이는 레퍼런덤이 종료되고, 레퍼런덤이 승인되었다고 가정할 때 네트워크에서 변경 사항이 시행되기까지의 기간입니다. 

<robo-wiki-note title='Note:' type="warning">

  각 다른 유형의 원산지에 특정한 레퍼런덤에 대해 특정한 실행 기간이 설정되어 있습니다. 그러나 특정 레퍼런덤의 원조자는 해당 레퍼런덤의 작업을 미래의 많은 블록에서 실행하도록 설정할 수 있습니다.

</robo-wiki-note>

레퍼런덤은 닫혔고 투표가 집계되면 'baked'로 간주됩니다. 레퍼런덤이 승인되었다고 가정하면 네트워크에서 시행되기 위해 예약될 것입니다(체인의 스케줄러에서). 레퍼런덤은 현재 투표 중인 경우와 같이 결과가 보류 중인 경우 'unbaked'로 간주됩니다.

OpenGov의 추가로 누구나 언제든지 레퍼런덤을 시작할 수 있으며, 원하는 만큼 여러 번 시작할 수 있습니다. OpenGov는 한 번에 처리할 수 있는 레퍼런덤이 1개뿐인 제한을 제거합니다(참고로 Gov v1에서는 한 번에 1개의 레퍼런덤에만 투표할 수 있습니다. 커뮤니티가 동시에 투표할 수 있는 추가 비상 레퍼런덤을 제외한 예외도 있습니다).

OpenGov는 Origin 및 Track이라고 하는 여러 개의 새로운 기능/개념을 도입하며, 이는 프로토콜에서 레퍼런덤의 흐름과 처리를 돕기 위해 도입되었습니다.

각 Origin은 단일 레퍼런덤 클래스와 연결되며, 각 클래스는 트랙과 연결됩니다. 트랙은 레퍼런덤의 수명주기를 개별 원산지에 대해 지정하며, 해당 특정 원산지에서 레퍼런덤이 발생합니다. 트랙에 고유한 매개변수가 있어 네트워크가 특권 수준에 따라 레퍼런덤의 수명주기를 동적으로 수정할 수 있습니다(특권 수준은 레퍼런덤이 얼마나 강력한지/프로토콜에 어떤 종류의 변경을 가할 수 있는지를 생각할 수 있습니다).

*원산지는 레퍼런덤과 관련된 권한을 나타내는 것으로 생각하고, 트랙은 투표 기간의 길이 및 승인 및 지원 기준과 같은 레퍼런덤과 관련된 투표 매개변수로 생각할 수 있습니다.*

예를 들어, 런타임 업그레이드는 작은 트레저 팁과는 다른 프로토콜에 대한 함의를 가지므로, 다른 원산지가 필요합니다. 이를 통해 체인의 팔레트에서 사전에 결정된 투표 기간, 승인 및 지원 기준(트랙)을 동적으로 수정할 수 있습니다.


## 제안 및 제안 생명주기 

### 준비 기간

OpenGov에서는 참여자 커뮤니티의 토큰 홀더가 참여하여 참조표를 즉시 투표할 수 있도록 참조표가 초기에 생성될 수 있습니다. 그러나 참조표는 즉시 종료되거나 투표가 집계되거나 승인되어 즉시 시행될 수 있는 상태가 아닙니다. 대신, 참조표는 결정 기간으로 이동하기 전에 일련의 기준을 충족해야 합니다. 참조표가 결정 기간으로 들어가기 전까지는 미결 상태로 남게 되며, 개별 추적에서 지정된 전체 생명주기 기간이 지난 후에는 최종적으로 시간이 초과됩니다.

<robo-wiki-picture src='robonomics-opengov/1.jpeg' alt="picture" />

참조표가 결정 기간으로 들어가기 위한 기준은 다음과 같습니다:
1. 결정 기간이 시작되기 전에 경과해야 하는 준비 기간입니다. 이 준비 기간은 "결정 스나이핑" 가능성에 대비하여 도움이 되며, 이는 다수의 투표 권한을 통제하는 공격자가 참조표가 제안된 후 즉시 통과되도록 큰 지분을 사용하여 다른 토큰 홀더 DAO 구성원이 참조표를 충분히 고려하고 투표에 참여할 시간을 가질 수 있는 가능성을 우회하는 것을 방지합니다. 따라서 더 높은 권한 수준을 가진 Origins는 준비 기간이 훨씬 더 길게 설정됩니다.

2. 결정에 대한 여유 공간이 있어야 합니다. 각 추적은 동시에 결정할 수 있는 참조표의 수에 대한 제한을 가지고 있습니다 (max_deciding). 더 강력한 권한 수준을 가진 추적은 더 낮은 제한을 가집니다. 예를 들어, Root 수준의 origin은 Small Tipper origin과 같은 낮은 권한 수준의 origin과 비교하여 동시에 결정할 수 있는 참조표 수가 훨씬 적습니다.

3. 결정 예치금을 제출해야 합니다. 참조표를 초기에 생성하는 것은 비교적 저렴하며, 제출 예치금의 가치(참조표가 초기에 생성될 때 예약되는 예치금)은 상당히 낮으며, 주로 참조표와 관련된 온체인 저장에 필요한 가치로 구성됩니다. 결정 예치금은 훨씬 더 높으며, 스팸을 방지하기 위해 필요하며, OpenGov가 가져오는 경제 게임에 영향을 미치며, 이에 대해 나중에 알아보겠습니다.

위의 세 가지 기준이 모두 충족되면 참조표는 결정 기간으로 이동합니다. 참조표에 대한 투표는 그 결과에 반영됩니다.

### 결정 기간

*결정 기간에 대한 빠른 비디오 데모는 [이 비디오](https://www.youtube.com/watch?v=wk58C-2CqPI)를 참조하세요*.

위의 섹션에서 상세히 설명된 기준을 모두 충족한 후 참조표는 결정 기간으로 진입합니다.

결정 기간은 승인 및 지원 기준을 중심으로 합니다. 

승인은 승인 투표 가중치(AYE vs NAY)가 총 투표 가중치(모든 AYE 및 NAY 투표의 합산)와 비교되는 것으로 정의됩니다. 각 투표의 확신은 AYE/NAY 투표의 전체 가중치에 기여하(확신 투표 / 자발적 잠금에 대해 나중에 자세히 설명합니다), 승인 및 지원 기준에 대한 전반적인 가중치에 영향을 미칩니다.

지원은 참조표에 참여한 투표(토큰)의 총 수로 정의되며(확신에 대해 조정되지 않음), 시스템에서 가능한 총 투표 수와 비교됩니다(이를 파라체인의 XRT의 총 발행으로 생각해보세요 - 특히 XRT의 총 유통 공급은 여기에서 주된 요소가 아닙니다. 일부는 Ethereum에서 ERC-20 토큰으로 존재하기 때문입니다).

**ABSTAIN 방향의 투표는 승인 기준에 기여하지 않지만, 지원 기준에 포함되어 계산됩니다**

확인 기간으로 진행하려면 결정 기간 동안 지원 및 승인 기준을 충족해야 합니다.

각 추적에 대한 개별 지원 및 승인 기준에 대한 자세한 내용은 [이 스프레드시트](https://docs.google.com/spreadsheets/d/1CzUKxl5bEhLQRLC223NB81RTH4X4HgAoS1HPng23mXE/edit?usp=sharing)를 참조하세요.

### 확인 기간

각 추적은 자체적인 확인 기간을 가지고 있습니다. 더 높은 권한 수준을 가진 추적(예: Root)은 낮은 권한 수준을 가진 추적(예: Small Tipper)보다 훨씬 긴 확인 기간을 가지고 있습니다.

참조표는 확인 기간 동안 승인 및 지원 기준을 계속 충족해야 하며, 그렇지 않으면 다시 결정 기간으로 돌아갑니다(참고: 확인 기간 동안 결정 기간이 일시 중지되지 않으므로, 결정 기간이 확인 기간 동안 만료될 수 있으며, 이는 참조표가 승인 및 지원 기준을 더 이상 충족하지 않아 확인 기간에서 제외되는 경우, 실패한 참조표로 간주되어 시행되지 않습니다).

**개별 트랙에 대한 승인 및 지원 기준을 루트 오리진 권한을 가진 전체투표를 통해 조정할 수 있습니다.**

낮은 권한 수준을 가진 오리진은 높은 권한 수준을 가진 오리진보다 승인 및 지원 기준이 훨씬 쉽습니다(트랙에서 설정됨). 마찬가지로, 높은 한 수준을 가진 오리진은 낮은 권한을 가진 오리진보다 덜 가파른 곡선을 가지며(트랙에서 정의됨), 토큰 홀더 DAO가 실제로 전체투표를 승인하고 고권한 오리진 전체투표에 대한 전쟁을 피하기 위해 조치됩니다.

OpenGov에서 결정 기간이 만료된 후 승인되지 않은 전체투표는 기본적으로 거부된 것으로 간주되며, 제출 및 결정 예치금은 원조자에게 환불됩니다(참고: 결정 예치금은 전체투표의 원조자와 다른 사람이 게시할 수 있습니다).

전체투표가 확인 기간 동안 계속해서 승인 및 지원 기준을 충족하는 경우, 승인된 것으로 간주되며, 제안된 오리진에서 실행될 예정이지만, 최소 시행 기간이 경과한 후에만 전체투표가 실행됩니다.

### 시행 기간

시행 기간은 전체투표가 제안될 때 원조자에 의해 지정되지만, 각 트랙에서 지정된 최소 시행 기간에 따라 달라집니다. 더 강력한 오리진은 덜 가지권을 가진 오리진보다 훨씬 더 긴 최소 시행 기간을 가지고 있습니다. 이는 강력한 전체투표가 가할 수 있는 변경 사항에 대비하기 위해 네트워크가 충분한 시간을 갖도록 보장합니다.

## 자발적인 잠금 / 확신

Robonomics는 자발적인 잠금 또는 확신 투표라고 알려진 개념을 사용합니다. 이를 통해 토큰 홀더는 특정 조사를 위해 자신의 토큰을 얼마 동안 잠금할 것인지 결정함으로써 투표 권한을 높일 수 있습니다. 이 메커니즘은 각 조사 승인 기준에만 영향을 미치며, 확신 투표는 지지 기준에 영향을 미치지 않습니다.

확신 투표는 다음 공식을 사용하여 계산할 수 있습니다:

$$\text{Approval Votes} = \text{Tokens} * \text{Conviction\_Multiplier}$$


이 표는 잠금 기간의 증가 수준마다 승인 기준에 대한 투표가 어떻게 곱해지는지 보여줍니다:

| Lock Periods | Vote Multiplier | Lock Up Days |
|--------------|-----------------|--------------|
| No Lock      | 0.1x            | 0          |
| 1            | 1x              | 7            |
| 2            | 2x              | 14           |
| 4            | 3x              | 28           |
| 8            | 4x              | 56           |
| 16           | 5x              | 112          |
| 32           | 6x              | 224          |


토큰 홀더가 사용할 수 있는 최대 확신은 6배 확신입니다. 예를 들어, 5.5배 확신을 사용할 수 없습니다.

투표로 인해 토큰이 잠겨 있을 때 다른 조사에 투표하는 데는 여전히 사용할 수 있지만, 이는 전송 가능한 잔액에 포함되지 않습니다(다른 계정으로 보낼 수 없음). 전체 잠금 기간이 만료되면 잔액은 다시 전송 가능해집니다.

## 투표 위임

OpenGov에서는 각 조사를 검토하는 데 충분한 시간이 없는 토큰 홀더가 여전히 거버넌스 시스템의 일부로 사용되도록 허용하기 위해 투표 위임이라고 알려진 메커니즘이 추가되었습니다.

토큰 홀더는 시스템 내 다른 투표자(다른 계정)에게 투표 권한을 위임할 수 있습니다. 투표자는 각 개별 원본에 대해 투표 권한을 다른 계정에 할당할 수 있도록 유연하게 지정할 수 있습니다(토큰 수와 확신 수준).

이 위임 기능은 투표자 투표을 높이고 승인 및 지지 기준을 충족시키기 위해 도움을 줄 목적으로 한다.

투표 권한을 위임하려면 [Robonomics Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/explorer)의 거버넌스 -> 조사 섹션에서 찾을 수 있는 "위임" 기능을 사용할 수 있습니다. 또는 사용자는 Robonomics Portal의 개발자 -> 외부 섹션을 사용하여 convictionVoting(Delegate) 외부를 제출할 수 있지만, 포털의 조사 섹션의 "위임" 기능을 사용하는 것이 훨씬 쉽습니다.

## 조사 취소 / 종료 및 거버넌스 경제 게임

OpenGov에서는 상태에 관계없이 진행 중인 조사를 거부하는 Origins가 있습니다. 이들은 거버넌스 Canceller 및 Governance Killer 트랙으로 알려져 있습니다.

이러한 Origins는 이미 투표가 진행 중인 조사에 개입합니다. 이러한 Origins는 해당 Origin에서 시작된 조사가 승인되면 상태에 관계없이 진행 중인 조사를 즉시 거부합니다. 

취소 자체는 실행되기 위해 토큰 홀더가 투표해야 하는 유형의 조사입니다. 취소에는 자체 원본과 트랙이 있으며, 이들은 다른 Origins보다 낮은 리드 타임(의사 결정 기간 등)을 가지며, 승인 및 지지 곡선이 더 가파르고 날카로운 곡선을 가지고 있습니다(즉, 시간이 지남에 따라 기준을 충족하기가 훨씬 쉽습니다). 이는 조사의 취소가 일반적으로 긴급성을 동반하기 때문입니다.

거버넌스 Canceller는 이미 진행 중인 조사를 즉시 거부하기 위해 설계되었습니다. 이 원본에 의해 조사가 취소되면 제출 및 결정 예치금이 원조자에게 환불됩니다. 조사 원조자가 조사 내용에 인간적인 실수를 저지른 경우와 악의적인 행동을 시도하지 않은 경우에 조사가 취소될 수 있습니다.

거버넌스 Killer는 이미 진행 중인 조사를 즉시 거부하기 위해 설계되었습니다. 이는 거버넌스 경제 게임이 작용하는 곳입니다. Root와 같은 높은 특권 수준을 가진 Origins는 결정 기간에 진입하기 위해 높은 자본(XRT 토큰)을 요구하는 결정 예치금을 보증해야 합니다. 

악의적인 행위자가 Root 원본과 같은 조사를 제출하는 경우, 이에 대항하기 위해 토큰 홀더 DAO는 카운터 거버넌스 Killer 조사를 제기할 수 있습니다. 악의적인 조사가 거버넌스 Killer 원본을 통해 거부되면 제출 및 결정 예치금이 벌처럼 감소되므로, 원조자(이 예치금을 게시한 계정)는 해당 자금을 잃게 됩니다. 

이는 악의적인 행위자가 체인에 심각한 부정적인 영향을 미칠 수 있는 조사를 제기하려는 시도에 대해 심각한 경제적 결과가 있음을 의미하며, 이론적으로는 이를 시도하는 악의적인 행위자를 막을 것입니다.

지배력 킬러 트랙 자체의 결정 예금은 상당히 높습니다. 이는 그 외에도 좋은 국민투표의 예금을 감소시키려는 악의적인 행위자들을 막기 위한 것입니다. **기존의 지배력 킬러 국민투표는 후속 지배력 킬러 국민투표에 의해 취소될 수 있습니다.**

## Robonomics 기술위원회 및 화이트리스트 원천

이 그룹은 Robonomics 네트워크 프로토콜의 기술 지식을 가진 사람들을 대표하는 주요 목표를 가진 자율적인 전문 기구입니다. 

이 그룹(그리고 오직 이 그룹만)은 화이트리스트 팔렛에서 국민투표를 발의할 수 있습니다. 이 팔렛은 한 원천이 다른 원천의 특정 작업에 대한 권한 수준을 높일 수 있도록 하는 한 가지 기능을 수행합니다. 

이 그룹은 화이트리스트-루트라고 알려진 원천으로부터 국민투표를 승인할 수 있으며, 이러한 국민투표는 루트 수준의 권한으로 실행될 수 있지만, 이러한 국민투표는 그룹에 의해 승인된 특정 지정 명령만 성공적으로 작동합니다. 화이트리스트 팔렛은 다음을 확인합니다:
1. 원천이 실제로 화이트리스트-루트인지(즉, 이 원천의 트랙을 통과한 국민투표인지).
2. 제안이 그룹에 의해 화이트리스트에 등재되었는지.

두 가지 조건이 모두 참이면 작업은 루트 수준의 권한으로 실행됩니다.

이 시스템은 새로운 병렬 트랙(화이트리스트-루트 원천)을 가질 수 있는 능력을 제공합니다. 이 트랙의 매개변수는 투표 회전 기간을 더 짧게 설정할 수 있도록 하며(승인 및 지원 기준은 루트보다 조금 더 쉽게 충족될 수 있음), 이 공개적이고 투명한 프로세스는 Robonomics 네트워크 프로토콜의 전문가 그룹이 안전하고 시급한 국민투표를 제안할 수 있도록 합니다.

화이트리스트-루트 원천으로 시작된 국민투표의 지원 기준은 다른 원천/트랙과 달리 0으로 수렴하지 않습니다. 이는 이 그룹이 Robonomics 네트워크 프로토콜 전체를 사실상 통제하지 않도록 하며, 전체 토큰 홀더 DAO로부터 최소한의 지원(유권자 투표율)을 요구합니다.


## 국민투표 기간 

각 개별 국민투표의 기간이 단단한 것이 아니라는 것을 이해하는 것이 중요합니다. 국민투표의 수명주기 내에서 최소 시행 기간과 같은 일부 기간은 실제로 구체적인 기간을 가지지만, 결정 기간을 포함한 다른 기간은 그렇지 않습니다. 예를 들어, 준비 기간, 결정 기간, 확인 기간 및 최소 시행 기간의 최대 기간을 더해서 "각 국민투표는 X일이 걸린다"고 주장하는 것은 그보다 훨씬 유동적입니다.

이미지를 통해 같은 원천에서 시작된 몇 가지 별도의 국민투표를 살펴보겠습니다. 이 경우 루트 원천입니다. 

루트 원천은 각 기간의 기간과 승인 및 지원 곡선이 설정된 자체 트랙을 가지고 있음을 기억하는 것이 중요합니다.

국민투표는 특정 조건이 충족될 경우에만 수명주기의 다음 단계로 진행됩니다. 

<robo-wiki-picture src='robonomics-opengov/2.jpeg' alt="picture" />

다음 이미지에서는 위의 이미지에 설명된 대로 개별 국민투표의 수명주기의 다음 단계로 진행하기 위해 특정 조건이 충족되었다고 가정해야 합니다(그렇지 않은 경우를 제외하고).


### 투표자 투표율이 매우 낮은 경우의 최대 가능 기간

아래 이미지는 국민투표의 최대 가능한 타임라인을 나타냅니다. 이는 다음과 같은 국민투표를 상상해보십시오:
1. 결정 예금이 게시되었으며, 따라서 결정 기간에 진입한 국민투표입니다.
2. 예를 들어, AYE 방향으로 1 XRT의 단일 투표가 있습니다 - 이는 전체적인 지원이 매우 낮기 때문에 결정 기간의 매우 끝에서 필요한 지원(유권자 투표율)을 충족할 것입니다. 그러나 100% 승인을 받으므로 결국 확인 기간에 진입하는 요구 사항을 충족할 것입니다.
3. 확인 기간 동안 앞서 언급한 기준을 계속 충족합니다.
4. 국민투표에 의해 제기된 제안은 최소 시행 기간이 끝나는 동일한 블록에서 실행될 것입다 - 기술적으로 국민투표의 발의자는 국민투표에 자세히 기술된 네트워크 변경 사항을 미래의 많은 블록에 적용할 수 있으므로 실제로 개별 국민투표의 수명주기는 여러 일, 주, 월 또는 년에 걸칠 수 있습니다.

<robo-wiki-picture src='robonomics-opengov/3.jpeg' alt="picture" />

이 예에서 국민투표의 수명주기는 (대략) 17일입니다.


### 투표자 투표율이 많은 경우의 기간 (AYE 투표가 많은 경우)

이제 XRT 토큰 홀더 DAO가 많은 관심을 표명한 국민투표를 살펴보겠습니다. 이 예시에서는 전체 투표자 수가 약 248,771 XRT로 발생했으며, 모든 투표자가 찬성 방향으로 투표한다고 가정합니다 (참고: 기술적으로 Root 국민투표의 이 단계에서는 승인 기준을 충족하기 위해 찬성 방향의 투표가 전체 투표의 60% 이상이어야 합니다).

<robo-wiki-note title="Note:" type="warning">

 각 트랙에 대한 정확한 정보를 위해 항상 최신 트랙 정보를 참고하십시오. 자세한 내용은 [스프레드시트](https://docs.google.com/spreadsheets/d/1CzUKxl5bEhLQRLC223NB81RTH4X4HgAoS1HPng23mXE/edit?usp=sharing)에서 확인할 수 있습니다.

</robo-wiki-note>

이 예시에서는 다음과 같습니다:
1. 결정 예치금은 준비 기간 동안 게시되었으며, 따라서 준비 기간이 끝날 때 결정 기간으로 전환할 수 있었습니다.
2. 많은 투표자가 이 국민투표에 참여하여 상대적으로 짧은 시간 내에 약 248,771 XRT의 투표자 수를 얻었습니다.
3. 투표는 찬성 방향이 우세했습니다 (60% 이상 찬성).
4. 국민투표는 확인 기간 동안 항상 확인 기준을 충족합니다 (참고: 국민투표가 확인 기간의 기준을 충족하지 못하면 결정 기간으로 돌아갑니다).
5. 국민투표로 제기된 제안은 최소 시행 기간이 끝나는 동일한 블록에서 실제로 시행됩니다.

약 248,771 XRT 투표가 발생했기 때문에 국민투표는 약 168시간 (7일) 후에 확인 기간에 진입할 수 있는 기준을 충족합니다.

<robo-wiki-picture src='robonomics-opengov/4.jpeg' alt="picture" />

이 두 번째 예시에서는 투표자 수가 많았기 때문에 결정 기간이 최대 허용 시간의 절반을 지나서 종료되었습니다. 따라서 약 10일 후에 시행될 수 있는 국민투표가 이루어집니다.


### 결정 예치금이 게시되지 않은 기간

이제 원래 제안되었지만 결정 예치금이 게시되지 않은 국민투표를 살펴보겠습니다. 이러한 국민투표는 "준비 중인 상태"에 머무르는 종류의 "리무 상태"입니다.

<robo-wiki-picture src='robonomics-opengov/5.jpeg' alt="picture" />

이 세 번째 예시에서는 결정 예치금이 게시되지 않았기 때문에 국민투표가 실제로 결정 기간에 진입하지 않고 "준비 중인 상태"에 머무릅니다. 이는 결국, 결정 예치금이 게시되지 않으면 팔레트의 timeOut 상수에 지정된 기간이 경과한 후에 국민투표가 시간 초과됩니다.

이는 이전에 Kusama에서 발생한 사례로, Root 출처로 국민투표가 게시되었지만 결정 예치금을 게시하기 위한 높은 자본 요구 사항으로 인해 국민투표가 수명 주기의 후반 단계로 진입하지 못한 경우입니다. 이러한 국민투표는 "시간 초과" 플래그로 종료됩니다.


### 결정 예치금이 늦게 게시된 기간

마지막으로, 국민투표가 원래 제안된 후에 결정 예치금이 꽤 오랜 시간 동안 게시되지 않은 예시를 살펴보겠습니다. 이는 이전에 Kusama에서 발생한 사례로, Root 출처로 국민투표가 게시되었지만 원조자가 자신을 대신하여 결정 예치금을 게시하기 위해 높은 자본을 가진 사람을 찾는 데 시간을 소비해야 했던 경우입니다.

<robo-wiki-picture src='robonomics-opengov/6.jpeg' alt="picture" />

이 마지막 예시에서는 결정 예치금이 준비 기간이 끝난 후에 게시되었지만 국민투표가 시간 초과되기 전에 결정 기간에 진입하기 때문에 국민투표의 수명 주기가 실제로 정상보다 훨씬 길어집니다.

준비 기간 또는 "준비 중인 상태"에 있는 국민투표에 대해 토큰 홀더 DAO가 찬성/반대로 투표할 수 있다는 점을 유념해야 합니다.