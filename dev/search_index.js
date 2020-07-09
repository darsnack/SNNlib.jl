var documenterSearchIndex = {"docs":
[{"location":"thresholds/#Threshold-Functions","page":"Thresholds","title":"Threshold Functions","text":"","category":"section"},{"location":"thresholds/","page":"Thresholds","title":"Thresholds","text":"We provide non-mutating functions for the following threshold models:","category":"page"},{"location":"thresholds/","page":"Thresholds","title":"Thresholds","text":"Inhomogenouos Poisson process","category":"page"},{"location":"thresholds/","page":"Thresholds","title":"Thresholds","text":"SpikingNNFunctions.Threshold.poisson","category":"page"},{"location":"thresholds/#SpikingNNFunctions.Threshold.poisson","page":"Thresholds","title":"SpikingNNFunctions.Threshold.poisson","text":"poisson(baserate, theta, deltav, v; dt::Real, rng::AbstractRNG)\npoisson(baserate::AbstractArray{<:Real}, theta::AbstractArray{<:Real}, deltav::AbstractArray{<:Real}, v::AbstractArray{<:Real}; dt::Real, rng::AbstractRNG)\npoisson(baserate::CuVector{<:Real}, theta::CuVector{<:Real}, deltav::CuVector{<:Real}, v::CuVector{<:Real}; dt::Real, rng::AbstractRNG)\n\nEvaluate inhomogeneous Poisson process threshold functions. Modeled as\n\nX  mathrmdt rho_0 expleft(fracv - ThetaDelta_uright)\n\nwhere X sim mathrmUnif(0 1).\n\nUse CuVector instead of Vector to evaluate on GPU.\n\nFields\n\nbaserate: base line firing rate\ntheta: threshold potential\ndeltav: potential resolution\nv: current membrane potential\ndt: simulation timestep\nrng: random number generation\n\n\n\n\n\n","category":"function"},{"location":"synapses/#Synapse-Functions","page":"Synapses","title":"Synapse Functions","text":"","category":"section"},{"location":"synapses/","page":"Synapses","title":"Synapses","text":"We provide non-mutating functions for the following synapse models:","category":"page"},{"location":"synapses/","page":"Synapses","title":"Synapses","text":"Dirac-Delta\nAlpha\nExcited Postsynaptic Potential (EPSP)","category":"page"},{"location":"synapses/","page":"Synapses","title":"Synapses","text":"SpikingNNFunctions.Synapse.delta\nSpikingNNFunctions.Synapse.alpha\nSpikingNNFunctions.Synapse.epsp","category":"page"},{"location":"synapses/#SpikingNNFunctions.Synapse.delta","page":"Synapses","title":"SpikingNNFunctions.Synapse.delta","text":"delta(t::Real, lastspike, q)\ndelta(t::Real, lastspike::AbstractArray{<:Real}, q::AbstractArray{<:Real})\ndelta(t::Real, lastspike::CuVecOrMat{<:Real}, q::CuVecOrMat{<:Real})\n\nEvaluate a Dirac-delta synapse. Use CuVector instead of Vector for GPU support.\n\nFields\n\nt: current time\nlastspike: last pre-synaptic spike time\nq: amplitude\n\n\n\n\n\n","category":"function"},{"location":"synapses/#SpikingNNFunctions.Synapse.alpha","page":"Synapses","title":"SpikingNNFunctions.Synapse.alpha","text":"alpha(t::Real, lastspike, q, tau)\nalpha(t::Real, lastspike::AbstractArray{<:Real}, q::AbstractArray{<:Real}, tau::AbstractArray{<:Real})\nalpha(t::Real, lastspike::CuVecOrMat{<:Real}, q::CuVecOrMat{<:Real}, tau::CuVecOrMat{<:Real})\n\nEvaluate an alpha synapse. Modeled as (t - lastspike) * (q / τ) * exp(-(t - lastspike - τ) / τ) Θ(t - lastspike)   (where Θ is the Heaviside function). Use CuVector instead of Vector for GPU support.\n\nFields\n\nt: current time\nlastspike: last pre-synaptic spike time\nq: amplitude\ntau: time constant\n\n\n\n\n\n","category":"function"},{"location":"synapses/#SpikingNNFunctions.Synapse.epsp","page":"Synapses","title":"SpikingNNFunctions.Synapse.epsp","text":"epsp(t::Real, lastspike, q, taum, taus)\nepsp(t::Real, lastspike::AbstractArray{<:Real}, q::AbstractArray{<:Real}, taum::AbstractArray{<:Real}, taus::AbstractArray{<:Real})\nepsp(t::Real, lastspike::CuVecOrMat{<:Real}, q::CuVecOrMat{<:Real}, taum::CuVecOrMat{<:Real}, taus::CuVecOrMat{<:Real})\n\nEvaluate an EPSP synapse. Modeled as (ϵ₀ / τm - τs) * (exp(-Δ / τm) - exp(-Δ / τs)) Θ(Δ)   (where Θ is the Heaviside function and Δ = t - lastspike). Specifically, this is the EPSP time course for the SRM0 model introduced by Gerstner. Details: Spiking Neuron Models: Single Neurons, Populations, Plasticity\n\nUse CuVector instead of Vector for GPU support.\n\nFields\n\nt: current time\nlastspike: last pre-synaptic spike time\nq: amplitude\ntaum: rise time constant\ntaus: fall time constant\n\n\n\n\n\n","category":"function"},{"location":"neurons/#Neuron-Functions","page":"Neurons","title":"Neuron Functions","text":"","category":"section"},{"location":"neurons/","page":"Neurons","title":"Neurons","text":"We provide in-place and non-mutating functions for the following neuron models:","category":"page"},{"location":"neurons/","page":"Neurons","title":"Neurons","text":"Leaky-Integrate-and-Fire\nSimplified Spike Response Model (SRM0)","category":"page"},{"location":"neurons/","page":"Neurons","title":"Neurons","text":"SpikingNNFunctions.Neuron.lif\nSpikingNNFunctions.Neuron.srm0","category":"page"},{"location":"neurons/#SpikingNNFunctions.Neuron.lif","page":"Neurons","title":"SpikingNNFunctions.Neuron.lif","text":"lif(t::Real, I, V; R, tau)\nlif!(t::AbstractArray{<:Real}, I::AbstractArray{<:Real}, V::AbstractArray{<:Real}; R::AbstractArray{<:Real}, tau::AbstractArray{<:Real})\nlif!(t::CuVector{<:Real}, I::CuVector{<:Real}, V::CuVector{<:Real}; R::CuVector{<:Real}, tau::CuVector{<:Real})\n\nEvaluate a leaky integrate-and-fire neuron. Use CuVector instead of Vector to evaluate on GPU.\n\nFields\n\nt: time since last evaluation in seconds\nI: external current\nV: current membrane potential\nR: resistance constant\nvreset: reset potential\ntau: time constant\n\n\n\n\n\n","category":"function"},{"location":"neurons/#SpikingNNFunctions.Neuron.srm0","page":"Neurons","title":"SpikingNNFunctions.Neuron.srm0","text":"srm0(t::Real, I, V; lastspike, eta)\nsrm0!(t::Real, I::AbstractArray{<:Real}, V::AbstractArray{<:Real}; lastspike::AbstractArray{<:Real}, eta)\nsrm0!(t::Real, I::CuVector{<:Real}, V::CuVector{<:Real}; lastspike::CuVector{<:Real}, eta)\n\nEvaluate a SRM0 neuron. Use CuVector instead of Vector to evaluate on GPU.\n\nFields\n\nt: current time in seconds\nI: external current\nV: current membrane potential\nlastspike: time of last output spike in seconds\neta: post-synaptic response function\n\n\n\n\n\n","category":"function"},{"location":"#SpikingNNFunctions.jl","page":"Home","title":"SpikingNNFunctions.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Fast spiking neural network primitive functions for use in other packages. The primary purpose of the package is to act as a dependency for SpikingNN.jl. Exctracting these primitives into their own package allows users to easily extend SpikingNN.jl (similar to NNlib.jl's role to Flux.jl).","category":"page"},{"location":"","page":"Home","title":"Home","text":"Functions are designed to dispatch on scalar arguments, array arguments, and CuArray arguments. So, the function should be available no matter what device you intend to run on.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For testing, refer to the SpikingNN.jl repo where these primitives are covered as part of testing.","category":"page"},{"location":"#Future-Work","page":"Home","title":"Future Work","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Using LoopVectorization.jl to speed up CPU implementations (currently this causes issues for AMD CPUs)\nExploring dispatch on sparse arrays","category":"page"}]
}
